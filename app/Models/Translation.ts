import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Language from './Language';

export default class Translation extends BaseModel {
  @column({ isPrimary: true })
  public key: string;

  @column()
  public value: string;

  @column()
  public id_poi: number;

  @column()
  public id_lang: string;

  @hasMany(() => Language, {
    foreignKey: 'id_poi',
  })
  public ressources: HasMany<typeof Language>;
}
