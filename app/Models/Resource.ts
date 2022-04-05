import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Resource extends BaseModel {
  @column({ isPrimary: true })
  public url: string;

  @column()
  public type: string;

  @column()
  public id_poi: number;
}
