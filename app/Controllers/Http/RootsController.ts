import Env from '@ioc:Adonis/Core/Env';
import { RootInfo } from '../../../types/SharpObjects';

export default class RootsController {
  private url: string = Env.get('BASE_URL');
  private port: number = Env.get('PORT');
  public async root() {
    let link = `${this.url}:${this.port}/`;
    const rootInfo: RootInfo = {
      message: 'Links to begin in this RESTfull API, have a nice trip :)',
      admin_link: `${link}users`,
      pois_link: `${link}pois`,
    };
    return rootInfo;
  }
}
