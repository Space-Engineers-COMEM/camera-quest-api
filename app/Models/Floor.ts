import { hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import Poi from 'App/Models/Poi';

export default class Floor extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @hasMany(() => Poi)
  public pois: HasMany<typeof Poi>;
}
