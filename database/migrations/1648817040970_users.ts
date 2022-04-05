import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.timestamps(true, true);
      table.increments('id');
      table.string('email', 50).notNullable();
      table.string('password').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
