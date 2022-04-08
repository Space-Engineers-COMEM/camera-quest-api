import User from 'App/Models/User';
import UsersValidator from 'App/Validators/UserValidator';

export default class UsersController {
  public async index() {
    const results = await User.all();
    //to delete the password from the sended response
    const toSend = results.map((i) => {
      const mynewobject = {
        id: i.id,
        email: i.email,
      };
      return mynewobject;
    });
    return toSend;
  }

  public async show({ params }) {
    const results = await User.query().where('id', params.id);
    //to delete the password from the sended response
    const toSend = results.map((i) => {
      const mynewobject = {
        id: i.id,
        email: i.email,
      };
      return mynewobject;
    });
    return toSend[0];
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
