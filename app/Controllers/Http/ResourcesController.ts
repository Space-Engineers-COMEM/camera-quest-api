// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resource from 'App/Models/Resource';
import ResourceValidator from 'App/Validators/ResourceValidator';
import ResourceUpdateValidator from 'App/Validators/ResourceUpdateValidator';

export default class ResourcesController {
  public async index({ response }) {
    try {
      return await Resource.all();
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async show({ params, response }) {
    try {
      return await Resource.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async store({ request, response }) {
    try {
      const data = await request.validate(ResourceValidator);
      const resource = await Resource.create(data);
      return resource;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  public async update({ params, request, response }) {
    const data = await request.validate(ResourceUpdateValidator);
    const id = params.id;
    try {
      const resource = await Resource.findOrFail(id);
      resource.merge(data);
      await resource.save();
      return resource;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async destroy({ params, response }) {
    try {
      const resource = await Resource.findOrFail(params.id);
      return await resource.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
