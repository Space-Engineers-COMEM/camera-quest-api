import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class Emailexist {
  public async handle({ response, request }: HttpContextContract, next: () => Promise<void>) {
    const email = request.input('email');
    const responseDB = await User.query().where('email', email);
    console.log(responseDB);

    if (responseDB.length > 0)
      return response.badRequest({
        message: `email '${email}' is already taken, please choose another one to register`,
      });

    await next();
  }
}
