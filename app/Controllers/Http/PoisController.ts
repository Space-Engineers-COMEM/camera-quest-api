import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';
import TagPoi from 'App/Models/TagPoi';
import PoiValidator from 'App/Validators/PoiValidator';
import { PoiListed, PoiPreview, Response } from '../../../types/SharpObjects';
import Database from '@ioc:Adonis/Lucid/Database';
import Drive from '@ioc:Adonis/Core/Drive';
import Env from '@ioc:Adonis/Core/Env';
import fetch from 'cross-fetch';
import PoiUpdateValidator from 'App/Validators/PoiUpdateValidator';

const MIN_PROBABILITY = 0.75;

export default class PoisController {
  public async index({ response }) {
    try {
      const pois = await Database.query().from('pois').select('*').orderBy('id', 'asc');
      return response.ok(pois);
    } catch (error) {
      response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async show({ params, response }) {
    try {
      return await Poi.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async store({ request, response }) {
    try {
      const data = await request.validate(PoiValidator);
      const poi = await Poi.create(data);
      return poi;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  public async update({ params, request, response }) {
    const data = await request.validate(PoiUpdateValidator);
    const id = params.id;
    try {
      const poi = await Poi.findOrFail(id);
      poi.merge(data);
      await poi.save();
      return poi;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async destroy({ params, response }) {
    try {
      const poi = await Poi.findOrFail(params.id);
      return await poi.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async getPreviews({ response }) {
    try {
      // Search in DB for all POIs
      const allPois = await Database.query().from('pois').select('*').orderBy('id', 'asc');
      if (allPois.length <= 0)
        return response.ok({
          type: 'error',
          content: 'No POIs in the database',
        });

      let PoisToSend: PoiListed[] = [];

      // Loop to catch each ressoures for each pois
      for (const poi of allPois) {
        // Building response to send to the user
        const responseToSend: PoiListed = {
          id: poi.id,
          title: poi.title,
          imagePath: poi.image_url,
          area: poi.area,
        };

        PoisToSend.push(responseToSend);
      }
      return response.ok(PoisToSend);
    } catch (error) {
      response.internalServerError({
        type: 'error',
        message: `Internal problem server fetching in the database for the all the POIs`,
      });
    }
  }

  public async getPreview(id: number) {
    try {
      const poi = await Poi.findOrFail(id);

      const poiPreview: PoiPreview = {
        id: poi.id,
        title: poi.title,
        imagePath: poi.image_url,
      };

      return {
        status: 200,
        type: 'success',
        content: poiPreview,
      };
    } catch (error) {
      return {
        status: 500,
        type: 'error',
        error: 'Internal problem server fetching in the database for the POI with id ' + id,
      };
    }
  }

  public async getPrediction({ request, response }) {
    let image = request.file('file', {
      size: '4mb',
      extnames: ['jpg', 'png', 'gif', 'bmp', 'jpeg'],
    });

    // Check if the file is present
    if (!image) {
      return response.badRequest({ type: 'error', content: 'No image provided' });
    }

    // Check if the file is valid
    if (!image.isValid) {
      return response.badRequest({ type: 'error', content: image.errors[0].message });
    }

    // Get the file from the server
    const file = await Drive.get(image.tmpPath);

    // Get the prediction
    const predictionResponse = await this.callPredictionApi(file);

    // Check if the prediction was successful
    if (predictionResponse.predictions[0].probability < MIN_PROBABILITY) {
      return response.ok({
        type: 'unpredictable',
        content: "Couldn't predict the image",
      });
    } else {
      // Return the POI from the prediction and all its data
      const exhibitionNumber = predictionResponse.predictions[0].tagName.split('_')[0];
      const poi = await Poi.findByOrFail('exhibition_number', exhibitionNumber);

      const data = await this.getPreview(poi.id);

      return response.status(data.status).json({
        type: data.type,
        content: data.content,
      });
    }
  }

  public async getPoiData({ request, response }) {
    const id = request.param('id');
    const lang = request.param('lang');

    try {
      // Search in DB for the POI and error handling
      const poiDB = await Poi.query().where('id', id);
      if (poiDB.length <= 0)
        return response.ok({
          type: 'error',
          content: 'No POI using id ' + id + ' found',
        });

      // Search in DB for the translation and error handling
      const translations = await TranslationModel.query()
        .where('id_lang', lang)
        .where('id_poi', id);
      if (translations.length <= 0) {
        return response.ok({
          type: 'error',
          content: 'No content found for POI ' + id + ' in language ' + lang,
        });
      }

      // Search in DB for the ressources and error handling
      const resources = await Resource.query().where('id_poi', id);
      if (resources.length <= 0)
        return response.ok({ type: 'error', content: 'No resources found for POI ' + id });

      // Search in DB for the tags
      const tagsDB = await TagPoi.query().where('id_poi', id);
      let tags: Tag[] = [];
      for (const tag of tagsDB) {
        const responseDB = await Tag.query().where('id', tag.id_tag);
        tags.push(responseDB[0]);
      }

      // Return the response
      let content: Response = {
        poi: poiDB[0],
        translations: translations,
        resources: resources,
        tags: tags,
      };

      return response.ok({
        type: 'success',
        content: content,
      });
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: 'Internal problem server fetching in the database for the POI with id ' + id,
      });
    }
  }

  /**
   * Sends a file to the prediction API and returns the response.
   * @param {Buffer} file - The image file that needs to be classified.
   * @returns The prediction API returns a JSON object.
   */
  private async callPredictionApi(file: Buffer) {
    // Fetch data from prediction API
    const predictionRequest = await fetch(Env.get('PREDICTION_API_URL'), {
      method: 'post',
      body: file,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': Env.get('PREDICTION_API_KEY'),
      },
    });

    const predictionResponse = await predictionRequest.json();
    return predictionResponse;
  }
}
