import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Language extends BaseModel {
  @column({ isPrimary: true })
  public lang_iso: string;

  @column()
  public lang_name: string;
}
