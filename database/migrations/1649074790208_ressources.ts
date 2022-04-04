import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Ressources extends BaseSchema {
  protected tableName = 'ressources';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('url').notNullable().primary();
      table.string('type').notNullable();
      table.integer('id_poi').notNullable().unsigned().references('pois.id').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
