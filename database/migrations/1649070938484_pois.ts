import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Pois extends BaseSchema {
  protected tableName = 'pois';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('exhibition_number').notNullable().unique();
      table.string('title').notNullable();
      table.string('manufacturer').notNullable();
      table.string('periode').notNullable();
      table.boolean('archived').notNullable();
      table.integer('area').notNullable();
      table.string('image_url').notNullable();
      table.string('location').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
