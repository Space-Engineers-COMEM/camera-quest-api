import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import Encryption from '@ioc:Adonis/Core/Encryption';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({
    prepare: (value: string) => Encryption.encrypt(value),
    consume: (value: string) => Encryption.decrypt(value),
  })
  public password: string;

  @column()
  public email: string;
}
