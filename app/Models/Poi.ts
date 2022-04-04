import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Ressource from 'App/Models/Ressource';
import Translation from './Translation';
import Tag from './Tag';

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

  @hasMany(() => Translation, {
    foreignKey: 'id_poi',
  })
  public translation: HasMany<typeof Translation>;

  @manyToMany(() => Tag, {
    pivotTable: 'tag_pois',
  })
  public tag: ManyToMany<typeof Tag>;
}
