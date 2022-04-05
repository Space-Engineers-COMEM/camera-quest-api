// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Poi from 'App/Models/Poi';

export default class PoisController {
  public async index() {
    return await Poi.all();
  }

  public async show({ params }) {
    return await Poi.findOrFail(params.id);
  }

  public async store({ request }) {
    const poi = await Poi.findOrFail(request.id);
    return await poi.save();
  }

  public async destroy({ request }) {
    const poi = await Poi.findOrFail(request.id);
    return await poi.delete();
  }
}
