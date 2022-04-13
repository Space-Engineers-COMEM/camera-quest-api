// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Translation from 'App/Models/Translation';
import TranslationUpdateValidator from 'App/Validators/TranslationUpdateValidator';
import TranslationValidator from 'App/Validators/TranslationValidator';

export default class TranslationsController {
  /**
   * It returns all the translations in the database
   * @param  - response - This is the response object that is passed to the controller.
   * @returns All the translations
   */
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

  /**
   * It returns the translation with the given id
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The translation with the id that was passed in the params.
   */
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

  /**
   * It takes the request, validates it, and then creates a new translation
   * @param  - request - The request object.
   * @returns The translation object
   */
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

  /**
   * It updates a translation with the given id
   * @param  - params - The parameters of the request.
   * @returns The updated translation
   */
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

  /**
   * It finds a translation by its id, and then deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
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
