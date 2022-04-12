import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class LanguageValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    lang_iso: schema.string({ escape: true, trim: true }, [
      rules.unique({ table: 'languages', column: 'lang_iso', caseInsensitive: true }),
      rules.maxLength(2),
    ]),
    lang_name: schema.string({ escape: true, trim: true }, [
      rules.unique({ table: 'languages', column: 'lang_name', caseInsensitive: true }),
    ]),
  });

  public messages = {};
}
