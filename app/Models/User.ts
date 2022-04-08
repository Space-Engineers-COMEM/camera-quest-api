import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm';
import Hash from '@ioc:Adonis/Core/Hash';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public email: string;

  @beforeSave()
  public static async hashPassword(modelReference: User) {
    if (modelReference.$dirty.password) {
      modelReference.password = await Hash.make(modelReference.password);
    }
  }
}
