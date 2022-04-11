import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Poi from './Poi';

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public attributes: string;

  @manyToMany(() => Poi)
  public skills: ManyToMany<typeof Poi>;
}
