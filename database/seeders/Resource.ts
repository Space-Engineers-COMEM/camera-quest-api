import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Resource from 'App/Models/Resource';

export default class ResourceSeeder extends BaseSeeder {
  public async run() {
    await Resource.createMany([
      {
        url: 'https.//testaudio.com',
        id_poi: 1,
        id_lang: 1,
      },
      {
        url: 'http://localhost:3333/images/image.JPG',
        id_poi: 1,
        id_lang: 1,
      },
      {
        url: 'https.//test2audio.com',
        id_poi: 2,
        id_lang: 1,
      },
      {
        url: 'https.//test2photo.com',
        id_poi: 2,
        id_lang: 1,
      },
    ]);
  }
}
