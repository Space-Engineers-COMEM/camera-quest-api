import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Languages extends BaseSchema {
  protected tableName = 'languages';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('lang_iso').primary().notNullable();
      table.string('lang_name').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
