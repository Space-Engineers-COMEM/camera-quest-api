import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ResourceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    url: schema.string({}, [rules.url()]),
    type: schema.enum(
      ['image', 'video', 'audio', 'link'],
      [
        // rules.unique({
        //   table: 'resources',
        //   column: 'type',
        //   where: {
        //     id_poi: this.ctx.request.all().id_poi,
        //     id_lang: this.ctx.request.all().id_lang,
        //   },
        // }),
      ]
    ),
    id_poi: schema.number([rules.exists({ table: 'pois', column: 'id' })]),
    id_lang: schema.number([rules.exists({ table: 'languages', column: 'id' })]),
  });

  public messages = {};
}
