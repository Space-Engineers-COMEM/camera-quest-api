import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Translations extends BaseSchema {
  protected tableName = 'translations';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('key').notNullable().primary();
      table.string('value').notNullable();
      table
        .integer('id_poi')
        .notNullable()
        .unsigned()
        .references('pois.id')
        .onDelete('CASCADE')
        .defaultTo(0);
      table
        .string('id_lang')
        .notNullable()
        .references('languages.lang_iso')
        .onDelete('CASCADE')
        .defaultTo('null');
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
