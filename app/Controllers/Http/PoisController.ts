import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';
import TagPoi from 'App/Models/TagPoi';
import PoiValidator from 'App/Validators/PoiValidator';
import { PoiPreview, Response } from '../../../types/SharpObjects';
import Database from '@ioc:Adonis/Lucid/Database';
import Env from '@ioc:Adonis/Core/Env';
import fetch from 'cross-fetch';
import PoiUpdateValidator from 'App/Validators/PoiUpdateValidator';
import { PoiToStore } from '../../../types/SharpObjects';
import Drive from '@ioc:Adonis/Core/Drive';
import PoiValidatorForUpdate from 'App/Validators/PoiValidatorForUpdate';

const MIN_PROBABILITY = 0.75;

export default class PoisController {
  /**
   * It queries the database for all the POIs and returns them in an array
   * @param  - response - This is the response object that is passed to the controller.
   * @returns The response object with all the POIS is being returned.
   */
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

  /**
   * It returns a single POI from the database, or an error if the POI doesn't
   * exist
   * @param  - params - The parameters passed to the route.
   * @returns The POI is being returned.
   */
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

  /**
   * It receives a request, validates it, creates a new Poi and returns it
   * @param  - request - The request object.
   * @returns The POI is being returned.
   */
  public async store({ request, response }) {
    try {
      const data = await request.validate(PoiValidator);
      const coverImage = request.file('image', {
        extnames: ['jpg'],
      });
      if (!coverImage) {
        return response.badRequest({
          type: 'error',
          content: 'no image with the key "image" sent',
        });
      }
      if (!coverImage.isValid) {
        return response.badRequest({
          type: 'error',
          content: coverImage.errors,
        });
      }

      const today = Date.now();
      coverImage.clientName = `${today}_${coverImage.clientName}`;
      await coverImage.move(`${Env.get('URL_IMAGE')}`);
      const url = `${Env.get('BASE_URL')}images/${coverImage.fileName}`;
      const ObjectToStore: PoiToStore = {
        area: data.area,
        exhibition_number: data.exhibition_number,
        title: data.title,
        manufacturer: data.manufacturer,
        periode: data.periode,
        archived: data.archived,
        image_url: url,
        image_name: coverImage.clientName,
        location: data.location,
      };
      const poi = await Poi.create(ObjectToStore);
      return poi;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  /**
   * It takes the request data, validates it, finds the poi by id, merges the data, saves it, and
   * returns the POI
   * @param  - params - The parameters of the request.
   * @returns The updated POI
   */
  public async update({ params, request, response }) {
    const data = await request.validate(PoiValidatorForUpdate);
    const coverImage = request.file('image', {
      extnames: ['jpg'],
    });
    const id = params.id;
    try {
      const poi = await Poi.findOrFail(id);
      await Drive.delete(`images/${poi.image_name}`);
      const today = Date.now();
      coverImage.clientName = `${today}_${coverImage.clientName}`;
      await coverImage.move(`${Env.get('URL_IMAGE')}`);
      const url = `${Env.get('BASE_URL')}images/${coverImage.fileName}`;
      const ObjectToStore: PoiToStore = {
        area: data.area,
        exhibition_number: data.exhibition_number,
        title: data.title,
        manufacturer: data.manufacturer,
        periode: data.periode,
        archived: data.archived,
        image_url: url,
        image_name: coverImage.clientName,
        location: data.location,
      };
      poi.merge(ObjectToStore);
      await poi.save();
      return poi;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It finds a POI by id, and if it exists, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
  public async destroy({ params, response }) {
    try {
      const poi = await Poi.findOrFail(params.id);
      if (!(await Drive.exists(`images/${poi.image_name}`))) {
        return response.badRequest({
          type: 'error',
          content: "Image doesn't exist",
        });
      }
      await Drive.delete(`images/${poi.image_name}`);
      await poi.delete();
      return response.ok({
        type: 'sucess',
        content: 'resource deleted',
      });
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It fetches a POI from the database and returns it as a POIPreview object
   * @param {number} id - The id of the POI to be fetched.
   * @returns An object with the status, type, and content of the response.
   */
  private async getPreview(id: number) {
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

  /**
   * It gets the image from the request, calls the prediction API, checks if the prediction was
   * successful, and returns the POI data if it was
   * @param  - request - The request object
   * @returns The response is being returned.
   */
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

  /**
   * It fetches all the POI data in a specific language from the database and returns it in a JSON format
   * @param  - request: The request object.
   * @returns the POI data for a given id and language.
   */
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

  //  /!\ DEBUG /!\ À SUPPRIMER AVANT DEPLOY /!\
  public async getPredictionDebug({ response }) {
    // Get the prediction
    let content = {
      Url: 'https://media.gettyimages.com/photos/invented-by-the-italian-photographer-carlo-ponti-the-megalethoscope-picture-id90728156',
    };

    const predictionRequest = await fetch(
      'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/4a1d8e71-51d8-4d21-a31a-b906f347aff7/classify/iterations/Iteration1/url',
      {
        method: 'post',
        body: JSON.stringify(content),
        headers: {
          'Content-Type': 'application/json',
          'Prediction-Key': Env.get('PREDICTION_API_KEY'),
        },
      }
    );

    const predictionResponse = await predictionRequest.json();
    console.log(predictionResponse);

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
