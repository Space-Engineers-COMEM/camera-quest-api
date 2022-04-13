import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class PoiValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    exhibition_number: schema.number([
      rules.unique({ table: 'pois', column: 'exhibition_number' }),
    ]),
    title: schema.string({ escape: true, trim: true }, [
      rules.unique({ table: 'pois', column: 'title' }),
    ]),
    manufacturer: schema.string({ escape: true, trim: true }),
    periode: schema.string({ escape: true, trim: true }, [rules.minLength(4)]),
    archived: schema.boolean(),
    area: schema.number(),
    image_url: schema.string({ escape: true, trim: true }, [rules.url()]),
    location: schema.string({ escape: true, trim: true }),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {};
}
