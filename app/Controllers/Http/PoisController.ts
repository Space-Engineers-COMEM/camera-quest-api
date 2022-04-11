import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';
import TagPoi from 'App/Models/TagPoi';
import PoisValidator from 'App/Validators/PoisValidator';
import { Response, ResponseAll } from '../../../types/SharpObjects';
import Database from '@ioc:Adonis/Lucid/Database';

//ATTENTION DEMANDRR SI RESPONSE OK IS GOOD ?

export default class PoisController {
  public async index({ response }) {
    try {
      // Search in DB for all POIs
      const allPois = await Database.query().from('pois').select('*').orderBy('id', 'asc');
      if (allPois.length <= 0) return response.status(204);

      let PoisToSend: ResponseAll[] = [];

      //loop to catch each ressoures for each pois
      for (const poi of allPois) {
        let idPoi = poi.id;

        // Search in DB for the ressources and error handling
        const resources = await Resource.query().where('id_poi', idPoi).where('type', 'photo');

        // Building response to send to the user
        const responseToSend: ResponseAll = {
          poi: poi,
          resources: resources[0],
        };

        PoisToSend.push(responseToSend);
      }
      return response.ok(PoisToSend);
    } catch (error) {
      response.status(500).send({
        message: `Internal problem server fetching in the database for the all the POIs`,
      });
    }
  }

  public async show({ params }) {
    return await Poi.findOrFail(params.id);
  }

  public async store({ request }) {
    const data = await request.validate(PoisValidator);
    const poi = await Poi.create(data);
    return poi;
  }

  public async destroy({ request }) {
    const poi = await Poi.findOrFail(request.id);
    return await poi.delete();
  }

  public async poi({ request, response }) {
    const params = request.params();
    try {
      // Search in DB for the POI and error handling
      const poiDB = await Poi.query().where('id', params.id);
      if (poiDB.length <= 0) return response.ok({ type: 'error', content: 'No POI found' });
      // Search in DB for the translation and error handling
      const translate = await TranslationModel.query()
        .where('id_lang', params.lang)
        .where('id_poi', params.id);
      if (translate.length <= 0)
        return response.ok({ type: 'error', content: 'No translation found' });

      // Search in DB for the ressources and error handling
      const resources = await Resource.query().where('id_poi', params.id);
      if (resources.length <= 0)
        return response.ok({ type: 'error', content: 'No resources found' });

      // Search in DB for the tags
      const tagsDB = await TagPoi.query().where('id_poi', params.id);
      let tags: Tag[] = [];
      for (const tag of tagsDB) {
        const responseDB = await Tag.query().where('id', tag.id_tag);
        tags.push(responseDB[0]);
      }

      //create the response sended to the client
      const responseToSend: Response = {
        poi: poiDB[0],
        translations: translate,
        resources: resources,
        tags: tags,
      };
      return response.ok(responseToSend);
    } catch (error) {
      response.status(500).send({
        message: `Internal problem server fetching in the database for the POI with id '${params.id}'`,
      });
    }
  }

  public async getPoiFromPrediction(id, lang) {
    try {
      // Search in DB for the POI and error handling
      const poiDB = await Poi.query().where('id', id);
      if (poiDB.length <= 0)
        return { status: 200, type: 'error', content: 'No POI using id ' + id + ' found' };

      // Search in DB for the translation and error handling
      const translations = await TranslationModel.query()
        .where('id_lang', lang)
        .where('id_poi', id);
      if (translations.length <= 0) {
        return {
          status: 200,
          type: 'error',
          content: 'No content found for POI ' + id + ' in language ' + lang,
        };
      }

      // Search in DB for the ressources and error handling
      const resources = await Resource.query().where('id_poi', id);
      if (resources.length <= 0)
        return { status: 200, type: 'error', content: 'No resources found for POI ' + id };

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

      return {
        status: 200,
        type: 'predicition',
        content: content,
      };
    } catch (error) {
      return {
        status: '500',
        type: 'error',
        content: 'Internal problem server fetching in the database for the POI with id ' + id,
      }; // à test
    }
  }
}
