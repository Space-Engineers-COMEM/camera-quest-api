import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Ressource from 'App/Models/Ressource';

export default class RessourceSeeder extends BaseSeeder {
  public async run() {
    await Ressource.createMany([
      {
        url: 'https.//test.com',
        type: 'audio',
      },
    ]);
  }
}
