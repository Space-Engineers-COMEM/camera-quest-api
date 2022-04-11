import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Areas extends BaseSchema {
  protected tableName = 'areas';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name', 50).notNullable();
      table.integer('order_num').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
