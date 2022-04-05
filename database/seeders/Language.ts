import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Language from 'App/Models/Language';

export default class LanguageSeeder extends BaseSeeder {
  public async run() {
    await Language.createMany([
      {
        lang_iso: 'fr',
        lang_name: 'Français',
      },
      {
        lang_iso: 'en',
        lang_name: 'English',
      },
      {
        lang_iso: 'it',
        lang_name: 'Italien',
      },
      {
        lang_iso: 'de',
        lang_name: 'Deutsch',
      },
      {
        lang_iso: 'es',
        lang_name: 'Español',
      },
    ]);
  }
}
