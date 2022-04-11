import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Translation extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public key: string;

  @column()
  public value: string;

  @column()
  public id_poi: number;

  @column()
  public id_lang: number;
}
