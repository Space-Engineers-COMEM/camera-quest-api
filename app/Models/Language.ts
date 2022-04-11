import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Resource from './Resource';
import Translation from './Translation';

export default class Language extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public lang_iso: string;

  @column()
  public lang_name: string;

  @hasMany(() => Translation, {
    foreignKey: 'id_lang',
  })
  public translations: HasMany<typeof Translation>;

  @hasMany(() => Resource, {
    foreignKey: 'id_lang',
  })
  public resources: HasMany<typeof Resource>;
}
