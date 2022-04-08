import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Pois extends BaseSchema {
  protected tableName = 'pois';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('stage').notNullable();
      table.string('azure_tag').notNullable();
      table.integer('exhibition_number').notNullable();
      table.string('title').notNullable();
      table.string('author').notNullable();
      table.string('periode').notNullable();
      table.boolean('visible').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
