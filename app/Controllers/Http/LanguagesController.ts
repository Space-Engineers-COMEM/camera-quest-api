import Language from 'App/Models/Language';
import LanguageUpdateValidator from 'App/Validators/LanguageUpdateValidator';
import LanguageValidator from 'App/Validators/LanguageValidator';

export default class LanguagesController {
  /**
   * It returns all the languages in the database
   * @param  - response - The response object
   * @returns All the languages in the database.
   */
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

  /**
   * It returns the language with the given id
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The language with the id that was passed in the params.
   */
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

  /**
   * It validates the request data, creates a new language, and returns the language
   * @param  - request - The request object.
   * @returns The language object
   */
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

  /**
   * It takes the id of the language to be updated from the request parameters, finds the language in
   * the database, merges the new data with the old data, and saves the language
   * @param  - params - The route parameters.
   * @returns The language object
   */
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

  /**
   * It finds a language by its id, and if it exists, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The language that was deleted.
   */
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
