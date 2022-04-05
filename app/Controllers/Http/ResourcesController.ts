// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resource from 'App/Models/Resource';
import ResourcesValidator from 'App/Validators/ResourceValidator';

export default class ResourcesController {
  public async index() {
    return await Resource.all();
  }

  public async show({ params }) {
    return await Resource.findOrFail(params.id);
  }

  public async store({ request }) {
    const data = await request.validate(ResourcesValidator);
    const resource = await Resource.create(data);
    return resource;
  }

  public async destroy({ request }) {
    const resource = await Resource.findOrFail(request.id);
    return await resource.delete();
  }
}
