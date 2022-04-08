import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';
import TagPoi from 'App/Models/TagPoi';
import PoisValidator from 'App/Validators/PoisValidator';
import { Response } from '../../../types/SharpObjects';

export default class PoisController {
  public async index() {
    return await Poi.all();
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
        return response.badRequest({
          message: `The POI with the id '${params.id}' is not existant`,
        });

      // Search in DB for the translation and error handling
      const translate = await TranslationModel.query()
        .where('id_lang', params.lang)
        .where('id_poi', params.id);
      if (translate.length <= 0)
        return response.badRequest({
          message: `Translation in '${params.lang}' not available`,
        });

      // Search in DB for the ressources and error handling
      const resources = await Resource.query().where('id_poi', params.id);
      if (resources.length <= 0)
        return response.badRequest({
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
        message: `Internal problem server fetching in the database for the POI`,
      });
    }
  }
}
