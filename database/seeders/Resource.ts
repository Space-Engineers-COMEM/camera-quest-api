import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Resource from 'App/Models/Resource';

export default class ResourceSeeder extends BaseSeeder {
  public async run() {
    await Resource.createMany([
      {
        url: 'https://api.cameramuseum.app/audios/Megaletoscope_final.mp3',
        name: 'Megaletoscope_final.mp3',
        id_poi: 1,
        id_lang: 1,
      },
    ]);
  }
}
