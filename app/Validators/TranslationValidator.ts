import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class TranslationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    key: schema.enum(
      ['subtitle', 'description'],
      [
        // rules.unique({
        //   table: 'translations',
        //   column: 'key',
        //   where: {
        //     id_poi: this.ctx.request.all().id_poi,
        //     id_lang: this.ctx.request.all().id_lang,
        //   },
        // }),
      ]
    ),

    value: schema.string({}, []),
    id_poi: schema.number([rules.exists({ table: 'pois', column: 'id' })]),
    id_lang: schema.number([rules.exists({ table: 'languages', column: 'id' })]),
  });

  public messages = {};
}
