import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class PoisValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    azure_tag: schema.string({ escape: true, trim: true }),
    exhibition_number: schema.number(),
    title: schema.string({ escape: true, trim: true }),
    author: schema.string({ escape: true, trim: true }),
    periode: schema.string({ escape: true, trim: true }, [rules.minLength(4), rules.maxLength(4)]),
    visible: schema.boolean(),
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
