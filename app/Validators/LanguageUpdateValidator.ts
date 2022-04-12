import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class LanguageUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    lang_iso: schema.string.optional({ escape: true, trim: true }, [
      rules.unique({ table: 'languages', column: 'lang_iso', caseInsensitive: true }),
      rules.maxLength(2),
    ]),
    lang_name: schema.string.optional({ escape: true, trim: true }, [
      rules.unique({ table: 'languages', column: 'lang_name', caseInsensitive: true }),
    ]),
  });
  public messages = {};
}
