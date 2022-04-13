import User from 'App/Models/User';
import UsersValidator from 'App/Validators/UserValidator';

export default class UsersController {
  /**
   * It returns all the users in the database
   * @param  - response - The response object
   * @returns Return all the users.
   */
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

  /**
   * It's a function that takes in an object with a params property and a response property, and
   * returns a promise that resolves to either an array of users or an error
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The user with the id that matches the params.id
   */
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

  /**
   * It validates the request data using the UsersValidator class, then creates a new user using the
   * validated data
   * @param  - request - The request object.
   * @returns The user is being returned.
   */
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

  /**
   * It finds a user by id, and if it finds one, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
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
