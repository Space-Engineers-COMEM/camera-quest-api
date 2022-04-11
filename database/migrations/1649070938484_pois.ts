import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Pois extends BaseSchema {
  protected tableName = 'pois';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('azure_tag').notNullable();
      table.integer('exhibition_number').notNullable();
      table.string('title').notNullable();
      table.string('author').notNullable();
      table.string('periode').notNullable();
      table.boolean('visible').notNullable();
      table.integer('id_area').unsigned().notNullable().references('areas.id').onDelete('CASCADE');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
