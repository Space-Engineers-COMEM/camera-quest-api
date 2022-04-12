import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class TagUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ escape: true, trim: true }, [
      rules.unique({ table: 'tags', column: 'name', caseInsensitive: true }),
    ]),
  });

  public messages = {};
}
