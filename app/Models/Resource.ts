import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Resource extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public url: string;

  @column()
  public id_poi: number;

  @column()
  public id_lang: number;
}
