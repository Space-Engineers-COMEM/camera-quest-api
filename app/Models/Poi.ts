import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Ressource from 'App/Models/Ressource';

export default class Poi extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public azure_tag: string;

  @column()
  public exhibition_number: number;

  @column()
  public title: string;

  @column()
  public author: string;

  @column()
  public periode: string;

  @column()
  public visible: boolean;

  @hasMany(() => Ressource, {
    foreignKey: 'id_poi',
  })
  public ressources: HasMany<typeof Ressource>;
}
