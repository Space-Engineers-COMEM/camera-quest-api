import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Resource from 'App/Models/Resource';

export default class ResourceSeeder extends BaseSeeder {
  public async run() {
    await Resource.createMany([
      {
        url: 'https://api.cameramuseum.app/audios/Megaletoscope_final.mp3',
        name: 'Megaletoscope_final.mp3',
        id_poi: 1,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/Collodion_final.mp3',
        name: 'Collodion_final.mp3',
        id_poi: 2,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/FamilleChevalier_final.mp3',
        name: 'FamilleChevalier_final.mp3',
        id_poi: 3,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/PhotoInstantanee_final.mp3',
        name: 'PhotoInstantanee_final.mp3',
        id_poi: 4,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/ChaiseJudiciaire_final.mp3',
        name: 'ChaiseJudiciaire_final.mp3',
        id_poi: 5,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/PortraitPhotographique_final.mp3',
        name: 'PortraitPhotographique_final.mp3',
        id_poi: 6,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/PlanFilm_final.mp3',
        name: 'PlanFilm_final.mp3',
        id_poi: 7,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/InterviewLuc_final.mp3',
        name: 'InterviewLuc_final.mp3',
        id_poi: 8,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/InterviewMaude_final.mp3',
        name: 'InterviewMaude_final.mp3',
        id_poi: 9,
        id_lang: 1,
      },
      {
        url: 'https://api.cameramuseum.app/audios/RetineNumerique_final.mp3',
        name: 'RetineNumerique_final.mp3',
        id_poi: 10,
        id_lang: 1,
      },
    ]);
  }
}
