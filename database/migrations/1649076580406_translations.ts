import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Translations extends BaseSchema {
  protected tableName = 'translations';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.enu('key', ['subtitle', 'description']).notNullable();
      table.string('value').notNullable();
      table.integer('id_poi').unsigned().notNullable().references('pois.id').onDelete('CASCADE');
      table
        .integer('id_lang')
        .unsigned()
        .notNullable()
        .references('languages.id')
        .onDelete('CASCADE');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
