import User from 'App/Models/User';
import UsersValidator from 'App/Validators/UserValidator';

export default class UsersController {
  public async index({ response }) {
    try {
      const results = await User.all();
      return results;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async show({ params, response }) {
    try {
      const results = await User.query().where('id', params.id);
      return results;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  public async store({ request, response }) {
    try {
      const data = await request.validate(UsersValidator);
      const user = await User.create(data);
      return user;
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.messages,
      });
    }
  }

  public async destroy({ params, response }) {
    try {
      const user = await User.findOrFail(params.id);
      return await user.delete();
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
