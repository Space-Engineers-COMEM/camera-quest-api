import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Poi from 'App/Models/Poi';

export default class PoisSeeder extends BaseSeeder {
  public async run() {
    await Poi.createMany([
      {
        area: 1,
        exhibition_number: 124,
        title: 'Mégaletoscope',
        manufacturer: 'Carlo Ponti',
        periode: '1862',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/124_megaletoscope.jpg',
        image_name: '124_megaletoscope.jpg',
        location: 'Italie',
      },
      {
        area: 1,
        exhibition_number: 108,
        title: 'Opticiens Parisiens',
        manufacturer: 'Famille Chevalier',
        periode: '~1800',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/108_opticiensParisiensChevalier.jpg',
        image_name: '108_opticiensParisiensChevalier.jpg',
        location: 'Paris',
      },
      {
        area: 1,
        exhibition_number: 199,
        title: 'Prise de vue en extérieur au temps du Collodion',
        manufacturer: 'Roger Fenton',
        periode: '~1850',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/199_collodion.jpg',
        image_name: '199_collodion.jpg',
        location: 'Londres',
      },
    ]);
  }
}
