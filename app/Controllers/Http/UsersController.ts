// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class UsersController {
  public async index() {
    return await Database.from('users').select('*');
  }
}
