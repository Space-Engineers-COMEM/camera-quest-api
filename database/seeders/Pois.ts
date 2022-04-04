import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Poi from 'App/Models/Poi';

export default class PoisSeeder extends BaseSeeder {
  public async run() {
    await Poi.createMany([
      {
        azure_tag: 'azureTag1',
        exhibition_number: 124,
        title: 'appareil 1',
        author: 'Nicéphore niépce',
        periode: '2015',
        visible: true,
      },
    ]);
  }
}
