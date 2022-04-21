import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Resource from 'App/Models/Resource';

export default class ResourceSeeder extends BaseSeeder {
  public async run() {
    await Resource.createMany([
      {
        url: 'https.//testaudio.com',
        name: 'test',
        id_poi: 1,
        id_lang: 1,
      },
    ]);
  }
}
