import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Resource from 'App/Models/Resource';

export default class ResourceSeeder extends BaseSeeder {
  public async run() {
    await Resource.createMany([
      {
        url: 'https.//testaudio.com',
        type: 'audio',
        id_poi: 1,
        id_lang: 1,
      },
      {
        url: 'https.//testphoto.com',
        type: 'image',
        id_poi: 1,
        id_lang: 1,
      },
      {
        url: 'https.//test2audio.com',
        type: 'audio',
        id_poi: 2,
        id_lang: 1,
      },
      {
        url: 'https.//test2photo.com',
        type: 'image',
        id_poi: 2,
        id_lang: 1,
      },
    ]);
  }
}
