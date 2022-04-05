import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class TagPoi extends BaseSchema {
  protected tableName = 'tag_pois';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_tag').unsigned().references('tags.id');
      table.integer('id_poi').unsigned().references('pois.id');
      table.unique(['id_tag', 'id_poi']);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
