import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ResourceUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    audio: schema.file.optional({
      extnames: ['mp3'],
    }),
    id_poi: schema.number.optional([rules.exists({ table: 'pois', column: 'id' })]),
    id_lang: schema.number.optional([rules.exists({ table: 'languages', column: 'id' })]),
  });

  public messages = {};
}
