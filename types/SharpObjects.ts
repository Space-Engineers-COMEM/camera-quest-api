import Poi from 'App/Models/Poi';
import TranslationModel from 'App/Models/Translation';
import Resource from 'App/Models/Resource';
import Tag from 'App/Models/Tag';

type RootInfo = {
  message: string;
  admin_link: string;
  pois_link: string;
};

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

type ObjectToStore = {
  url: string;
  id_poi: number;
  id_lang: number;
  test: string;
};

export { RootInfo, Response, ResponseAll, PoiPreview, ObjectToStore };
