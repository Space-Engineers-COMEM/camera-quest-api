// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Language from 'App/Models/Language';
import LanguageUpdateValidator from 'App/Validators/LanguageUpdateValidator';
import LanguageValidator from 'App/Validators/LanguageValidator';

export default class LanguagesController {
  public async index({ response }) {
    try {
      return await Language.all();
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async show({ params, response }) {
    try {
      return await Language.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async store({ request, response }) {
    try {
      const data = await request.validate(LanguageValidator);
      const language = await Language.create(data);
      return language;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  public async update({ params, request, response }) {
    const data = await request.validate(LanguageUpdateValidator);
    console.log(data);
    const id = params.id;
    try {
      const language = await Language.findOrFail(id);
      language.merge(data);
      await language.save();
      return language;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async destroy({ params, response }) {
    try {
      const language = await Language.findOrFail(params.id);
      return await language.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
