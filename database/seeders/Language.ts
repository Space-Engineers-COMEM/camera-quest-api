import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Language from 'App/Models/Language';

export default class LanguageSeeder extends BaseSeeder {
  public async run() {
    await Language.createMany([
      {
        lang_iso: 'FR',
        lang_name: 'Français',
      },
      {
        lang_iso: 'EN',
        lang_name: 'English',
      },
      {
        lang_iso: 'IT',
        lang_name: 'Italiano',
      },
      {
        lang_iso: 'DE',
        lang_name: 'Deutsch',
      },
      {
        lang_iso: 'ES',
        lang_name: 'Español',
      },
    ]);
  }
}
