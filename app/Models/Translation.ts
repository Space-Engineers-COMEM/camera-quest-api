// import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Translation extends BaseModel {
  @column({ isPrimary: true })
  public key: string;

  @column()
  public value: string;
}
