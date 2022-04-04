import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true);

      table.string('name', 50).notNullable();
      table.string('password', 60).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
