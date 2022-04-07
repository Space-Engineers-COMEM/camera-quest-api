import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Translation from 'App/Models/Translation';

export default class TranslationSeeder extends BaseSeeder {
  public async run() {
    await Translation.createMany([
      {
        key: 'title',
        value: "L'appareil photo super beau",
        id_poi: 1,
        id_lang: 'fr',
      },
      {
        key: 'Description',
        value: 'Lorem Ipsum ....',
        id_poi: 1,
        id_lang: 'fr',
      },
    ]);
  }
}
