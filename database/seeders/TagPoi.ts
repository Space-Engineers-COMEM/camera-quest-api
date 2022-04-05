import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import TagPoi from 'App/Models/TagPoi';

export default class TagPoiSeeder extends BaseSeeder {
  public async run() {
    await TagPoi.createMany([
      {
        id_tag: 1,
        id_poi: 1,
      },
    ]);
  }
}
