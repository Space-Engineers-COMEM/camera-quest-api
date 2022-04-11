import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Poi from './Poi';

export default class Area extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public order_num: number;

  @hasMany(() => Poi)
  public pois: HasMany<typeof Poi>;
}
