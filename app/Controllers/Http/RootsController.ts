// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env';
import RootInfo from '../../../types/SharpObjects';

export default class RootsController {
  private link: string = Env.get('LINK', 'http://localhost:3333/');
  public async root() {
    const rootInfo: RootInfo = {
      message: 'Links to begin in this RESTfull API, have a nice trip :)',
      users_link: `${this.link}users`,
    };
    return rootInfo;
  }
}
