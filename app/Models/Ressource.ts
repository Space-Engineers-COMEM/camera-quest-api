import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Ressource extends BaseModel {
  @column({ isPrimary: true })
  public url: string;

  @column()
  public type: string;
}
