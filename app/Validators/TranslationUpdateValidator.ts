import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class TranslationUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    key: schema.enum.optional(
      ['subtitle', 'description'],
      [
        // rules.unique({
        //   table: 'translations',
        //   column: 'key',
        //   where: {
        //     id_poi: this.ctx.params.id_poi,
        //     id_lang: this.ctx.params.id_lang,
        //   },
        // }),
      ]
    ),

    value: schema.string.optional(),
    id_poi: schema.number([rules.exists({ table: 'pois', column: 'id' })]),
    id_lang: schema.number([rules.exists({ table: 'languages', column: 'id' })]),
  });

  public messages = {};
}
