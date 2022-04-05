import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    password: schema.string({ escape: true, trim: true }, [
      rules.minLength(8),
      rules.maxLength(255),
    ]),
    email: schema.string({ escape: true, trim: true }, [rules.email(), rules.maxLength(255)]),
  });

  public messages = {};
}
