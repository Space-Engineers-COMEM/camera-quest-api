import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';

type Response = {
  poi: Poi;
  translations: TranslationModel[];
  resources: Resource[];
  tags: Tag[];
};

type ResponseAll = {
  poi: Poi;
  resources: Resource;
};

type PoiPreview = {
  id: number;
  title: string;
  imagePath: string;
};

type ImageToStore = {
  url: string;
  name: string;
  id_poi: number;
  id_lang: number;
};

export { Response, ResponseAll, PoiPreview, ImageToStore };
