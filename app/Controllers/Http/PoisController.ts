import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import PoisValidator from 'App/Validators/PoisValidator';

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
      const poiDB = await Poi.findOrFail(params.id);
      const poiFinal = poiDB.$attributes;
      const translate = await TranslationModel.query()
        .where('id_lang', params.lang)
        .where('id_poi', params.id);
      if (translate.length <= 0)
        return response.badRequest({
          message: `Translation in '${params.lang}' not available`,
        });
      const responseToSend = {
        poi: poiFinal,
        translations: translate,
      };
      return response.ok(responseToSend);
    } catch (error) {
      return response.badRequest({
        message: 'Not able to give you the POI please check the id',
      });
    }
  }
}
