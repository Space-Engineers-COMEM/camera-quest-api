import Env from '@ioc:Adonis/Core/Env';
import { RootInfo } from '../../../types/SharpObjects';

export default class RootsController {
  private link: string = Env.get('BASEURL');
  public async root() {
    const rootInfo: RootInfo = {
      message: 'Links to begin in this RESTfull API, have a nice trip :)',
      users_link: `${this.link}users`,
    };
    return rootInfo;
  }
}
