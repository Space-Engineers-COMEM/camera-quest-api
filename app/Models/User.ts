import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import Encryption from '@ioc:Adonis/Core/Encryption';

export default class User extends BaseModel {
  @column({
    prepare: (value: string) => Encryption.encrypt(value),
    consume: (value: string) => Encryption.decrypt(value),
  })
  public password: string;

  @column({ isPrimary: true })
  public email: string;
}
