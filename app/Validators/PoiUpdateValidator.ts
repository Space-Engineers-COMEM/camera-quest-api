import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class PoiUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    exhibition_number: schema.number.optional(), // supprimer l'aspect unique
    title: schema.string.optional({ escape: true, trim: true }), // supprimer l'aspect unique
    manufacturer: schema.string.optional({ escape: true, trim: true }),
    periode: schema.string.optional({ escape: true, trim: true }, [rules.minLength(4)]),
    archived: schema.boolean.optional(),
    area: schema.number.optional(),
    image_url: schema.string.optional({}, [rules.url()]), // supprimer l'échapement des caractères et le trimage des espaces
    location: schema.string.optional({ escape: true, trim: true }),
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
