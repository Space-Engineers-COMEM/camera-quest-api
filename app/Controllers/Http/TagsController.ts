// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TagValidator from 'App/Validators/TagValidator';

import Tag from 'App/Models/Tag';
import TagUpdateValidator from 'App/Validators/TagUpdateValidator';

export default class TagsController {
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