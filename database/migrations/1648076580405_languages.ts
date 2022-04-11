import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Languages extends BaseSchema {
  protected tableName = 'languages';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('lang_iso').notNullable();
      table.string('lang_name').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
