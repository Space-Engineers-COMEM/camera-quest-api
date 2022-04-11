import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Area from 'App/Models/Area';

export default class AreaSeeder extends BaseSeeder {
  public async run() {
    await Area.createMany([
      {
        name: 'Premier étage',
        order_num: 1,
      },
      {
        name: 'Deuxième étage',
        order_num: 2,
      },
      {
        name: 'Troisième étage',
        order_num: 3,
      },
    ]);
  }
}
