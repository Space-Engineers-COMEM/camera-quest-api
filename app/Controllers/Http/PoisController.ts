import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';
import TagPoi from 'App/Models/TagPoi';
import PoisValidator from 'App/Validators/PoisValidator';
import { Response, ResponseAll } from '../../../types/SharpObjects';
import Database from '@ioc:Adonis/Lucid/Database';

export default class PoisController {
  public async index({ response }) {
    try {
      // Search in DB for all POIs
      const allPOIs = await Database.query().from('pois').select('*').orderBy('id', 'asc');
      if (allPOIs.length <= 0)
        return response.ok({
          message: `POIs not available for the moment`,
        });

      let POIsToSend: ResponseAll[] = [];

      //loop to catch each ressoures for each pois
      for (const poi of allPOIs) {
        let idPOI = poi.id;
        // Search in DB for the ressources and error handling
        const resources = await Resource.query().where('id_poi', idPOI).where('type', 'photo');
        if (resources.length <= 0)
          return response.ok({
            message: `Resource for the POI with the id '${idPOI}' is not available`,
          });
        //building response to send to the user
        const responseToSend: ResponseAll = {
          poi: poi,
          resources: resources[0],
        };
        POIsToSend.push(responseToSend);
      }
      return response.ok(POIsToSend);
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
      if (poiDB.length <= 0)
        return response.ok({
          message: `The POI with the id '${params.id}' is not existant`,
        });

      // Search in DB for the translation and error handling
      const translate = await TranslationModel.query()
        .where('id_lang', params.lang)
        .where('id_poi', params.id);
      if (translate.length <= 0)
        return response.ok({
          message: `Translation in '${params.lang}' not available`,
        });

      // Search in DB for the ressources and error handling
      const resources = await Resource.query().where('id_poi', params.id);
      if (resources.length <= 0)
        return response.ok({
          message: `Resource for the POI with the id '${params.id}' is not available`,
        });

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
}
