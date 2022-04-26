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
      {
        area: 2,
        exhibition_number: 203,
        title: 'Photographie Instantanée',
        manufacturer: ' ',
        periode: '~1900',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/203_instantanee.jpg',
        image_name: '203_instantanee.jpg',
        location: 'France',
      },
      {
        area: 2,
        exhibition_number: 215,
        title: 'La Photographie Judiciaire',
        manufacturer: 'Alphonse Bertillon',
        periode: '~1860',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/215_photographieJudiciaire.jpg',
        image_name: '215_photographieJudiciaire.jpg',
        location: 'Paris',
      },
      {
        area: 2,
        exhibition_number: 219,
        title: 'Le portrait photographique',
        manufacturer: 'Eugène Adolphe Disdéri',
        periode: '~1850',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/219_portrait.jpg',
        image_name: '219_portrait.jpg',
        location: 'France',
      },
      {
        area: 3,
        exhibition_number: 309,
        title: 'Plan-film et filmpack',
        manufacturer: 'John Carbutt',
        periode: '~1884',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/199_filmpack.JPG',
        image_name: '309_filmpack.JPG',
        location: 'Angleterre',
      },
      {
        area: 3,
        exhibition_number: 322,
        title: 'Les pigeons photographes',
        manufacturer: 'Julius Neubronner',
        periode: '~1905',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/322_pigeon.jpg',
        image_name: '322_pigeon.jpg',
        location: 'Allemagne',
      },
      {
        area: 4,
        exhibition_number: 400,
        title: 'Appareil photo universel',
        manufacturer: ' ',
        periode: '2000-2020',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/400_smartphones.jpg',
        image_name: '400_smartphones.jpg',
        location: ' ',
      },
      {
        area: 4,
        exhibition_number: 428,
        title: 'La rétine numérique',
        manufacturer: 'Fairchild Imaging',
        periode: '~1950',
        archived: false,
        image_url: 'https://api.cameramuseum.app/images/428_retineNumerique.jpg',
        image_name: '428_retineNumerique.jpg',
        location: 'États-Unis',
      },
    ]);
  }
}
