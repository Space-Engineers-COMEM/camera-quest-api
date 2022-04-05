import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Resources extends BaseSchema {
  protected tableName = 'resources';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('url').notNullable().primary();
      table.string('type').notNullable();
      table
        .integer('id_poi')
        .notNullable()
        .unsigned()
        .references('pois.id')
        .onDelete('CASCADE')
        .defaultTo(0);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
