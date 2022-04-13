// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TagValidator from 'App/Validators/TagValidator';

import Tag from 'App/Models/Tag';
import TagUpdateValidator from 'App/Validators/TagUpdateValidator';

export default class TagsController {
  /**
   * It returns all the tags in the database
   * @param  - response - The response object.
   * @returns All the tags in the database.
   */
  public async index({ response }) {
    try {
      return await Tag.all();
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It returns the tag with the given id
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The tag with the id that was passed in the params.
   */
  public async show({ params, response }) {
    try {
      return await Tag.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It validates the request data using the TagValidator, then creates a new tag using the validated
   * data
   * @param  - request - The request object.
   * @returns The tag that was created.
   */
  public async store({ request, response }) {
    try {
      const data = await request.validate(TagValidator);
      const tag = await Tag.create(data);
      return tag;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  /**
   * It takes the id of the tag to be updated from the request params, finds the tag in the database,
   * merges the new data with the old data, and saves the tag
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The updated tag
   */
  public async update({ params, request, response }) {
    const data = await request.validate(TagUpdateValidator);
    console.log(data);
    const id = params.id;
    try {
      const tag = await Tag.findOrFail(id);
      tag.merge(data);
      await tag.save();
      return tag;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It finds a tag by its id, and if it exists, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
  public async destroy({ params, response }) {
    try {
      const tag = await Tag.findOrFail(params.id);
      return await tag.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
