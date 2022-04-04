import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class TagPoi extends BaseModel {
  @column()
  public id_tag: number;

  @column()
  public id_poi: number;
}
