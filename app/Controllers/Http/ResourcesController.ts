// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resource from 'App/Models/Resource';
import ResourceValidator from 'App/Validators/ResourceValidator';
import ResourceUpdateValidator from 'App/Validators/ResourceUpdateValidator';

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

  /**
   * It validates the request data using the ResourceValidator, then creates a new resource using the
   * validated data
   * @param  - request - The request object.
   * @returns The resource that was created.
   */
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
