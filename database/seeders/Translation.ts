import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Translation from 'App/Models/Translation';

export default class TranslationSeeder extends BaseSeeder {
  public async run() {
    await Translation.createMany([
      {
        key: 'title',
        value: 'Welcome',
        id_poi: 1,
        id_lang: 'en',
      },
    ]);
  }
}
