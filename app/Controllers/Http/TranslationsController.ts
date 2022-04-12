// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Translation from 'App/Models/Translation';
import TranslationUpdateValidator from 'App/Validators/TranslationUpdateValidator';
import TranslationValidator from 'App/Validators/TranslationValidator';

export default class TranslationsController {
  public async index({ response }) {
    try {
      return await Translation.all();
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async show({ params, response }) {
    try {
      return await Translation.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async store({ request, response }) {
    try {
      const data = await request.validate(TranslationValidator);
      const translation = await Translation.create(data);
      return translation;
    } catch (error) {
      console.log(error);
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  public async update({ params, request, response }) {
    const data = await request.validate(TranslationUpdateValidator);
    const id = params.id;
    try {
      const translation = await Translation.findOrFail(id);
      translation.merge(data);
      await translation.save();
      return translation;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async destroy({ params, response }) {
    try {
      const translation = await Translation.findOrFail(params.id);
      return await translation.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
