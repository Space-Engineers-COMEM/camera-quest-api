import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Application from '@ioc:Adonis/Core/Application';

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    if (seeder.default.developmentOnly && !Application.inDev) {
      return;
    }

    await new seeder.default(this.client).run();
  }

  public async run() {
    await this.runSeeder(await import('../User'));
    await this.runSeeder(await import('../Poi'));
    await this.runSeeder(await import('../Translation'));
    await this.runSeeder(await import('../Ressource'));
    await this.runSeeder(await import('../Tag'));
    await this.runSeeder(await import('../TagPoi'));
  }
}
