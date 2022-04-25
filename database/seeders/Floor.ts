import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Floor from 'App/Models/Floor';

export default class FloorSeeder extends BaseSeeder {
  public async run() {
    await Floor.createMany([
      {
        name: 'Étage jaune',
      },
      {
        name: 'Étage bleu',
      },
      {
        name: 'Étage rouge',
      },
      {
        name: 'Étage gris',
      },
      {
        name: 'Exposition temporaire',
      },
      {
        name: 'Histoire projection',
      },
    ]);
  }
}
