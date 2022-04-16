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

type PoiToStore = {
  area?: number;
  exhibition_number?: number;
  title?: string;
  manufacturer?: string;
  periode?: string;
  archived?: boolean;
  image_url?: string;
  image_name?: string;
  location?: string;
};

export { Response, ResponseAll, PoiPreview, PoiToStore };
