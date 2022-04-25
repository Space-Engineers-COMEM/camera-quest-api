import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Poi from 'App/Models/Poi';

export default class PoisSeeder extends BaseSeeder {
  public async run() {
    await Poi.createMany([
      {
        area: 1,
        exhibition_number: 124,
        title: 'Le Mégaletoscope',
        manufacturer: 'Carlo Ponti',
        periode: '1862',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/124_megaletoscope.jpg',
        image_name: '124_megaletoscope.jpg',
        location: 'Italie',
      },
    ]);
  }
}
