// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resource from 'App/Models/Resource';
import ResourceValidator from 'App/Validators/ResourceValidator';
import ResourceUpdateValidator from 'App/Validators/ResourceUpdateValidator';
import Env from '@ioc:Adonis/Core/Env';
import { ObjectToStore } from '../../../types/SharpObjects';

export default class ResourcesController {
  /**
   * It returns all the resources in the database
   * @param  - response - The response object
   * @returns The index method is returning all the resources.
   */
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

  /**
   * It returns the resource with the given id, or returns an error if the resource doesn't exist
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The resource with the id that was passed in the params.
   */
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
      //creating a unique name for the image
      const today = Date.now();
      coverImage.clientName = `${today}_${coverImage.clientName}`;
      await coverImage.move('public/images');
      const url = `${Env.get('BASE_URL')}images/${coverImage.fileName}`;
      const ObjectToStore: ObjectToStore = {
        url: url,
        id_poi: data.id_poi,
        id_lang: data.id_lang,
        test: coverImage.tmpPath,
      };
      const resource = await Resource.create(ObjectToStore);
      return resource;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It updates a resource with the given id, using the data from the request body
   * @param  - params - The parameters of the request.
   * @returns The resource that was updated.
   */
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

  /**
   * It finds a resource by its id, and if it exists, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
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
