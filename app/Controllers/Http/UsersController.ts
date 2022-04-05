// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import UsersValidator from 'App/Validators/UserValidator';

export default class UsersController {
  public async index() {
    return await User.all();
  }

  public async show({ params }) {
    return await User.findOrFail(params.id);
  }

  public async store({ request }) {
    const data = await request.validate(UsersValidator);
    const user = await User.create(data);
    return user;
  }

  public async destroy({ request }) {
    const user = await User.findOrFail(request.id);
    return await user.delete();
  }
}
