import * as model from './model';
import * as data from './data';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';

/**
 * @class
 * @classdesc 本地数据仓库
 */
export class Store {
  static model = model;
  static data = data;
  static sequelize: any = null;

  static init(config: any) {
    if (!this.sequelize) {
      const modelPath = path.join(path.dirname(__filename), '/model');
      config.modelPaths = [modelPath];
      this.sequelize = new Sequelize(config);
    }
  }

  static close() {
    if (this.sequelize) {
      this.sequelize.close();
      this.sequelize = null;
    }
  }

  static async buildTable() {
    await this.sequelize.sync({force: true});
    await Store.model.Sector.bulkCreate(Store.data.SectorList);
    await Store.model.Exchange.bulkCreate(Store.data.ExchangeList);
    await Store.model.Market.bulkCreate(Store.data.MarketList);
  }
}
