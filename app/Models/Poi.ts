import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Resource from 'App/Models/Resource';
import Translation from './Translation';
import Tag from './Tag';

export default class Poi extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public exhibition_number: number;

  @column()
  public title: string;

  @column()
  public manufacturer: string;

  @column()
  public periode: string;

  @column()
  public archived: boolean;

  @column()
  public area: number;

  @column()
  public image_url: string;

  @column()
  public image_name: string;

  @column()
  public location: string;

  @hasMany(() => Resource, {
    foreignKey: 'id_poi',
  })
  public ressources: HasMany<typeof Resource>;

  @hasMany(() => Translation, {
    foreignKey: 'id_poi',
  })
  public translations: HasMany<typeof Translation>;

  @manyToMany(() => Tag, {
    pivotTable: 'tag_pois',
  })
  public tag: ManyToMany<typeof Tag>;
}
