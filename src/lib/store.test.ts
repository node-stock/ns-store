import * as assert from 'power-assert';
import { Sequelize} from 'sequelize-typescript';
import { StModel, StData } from './store';

const config = require('../../config/config');
config.modelPaths = [__dirname + '/model'];

const sequelize = new Sequelize(config);

console.log(__dirname + '/models');

const testFetch  = async (done: any) => {
  const res = await sequelize.sync({force: true});
  await StModel.Sector.bulkCreate(StData.SectorList);
  await StModel.Exchange.bulkCreate(StData.ExchangeList);
  await StModel.Market.bulkCreate(StData.MarketList);

  done();
}

describe('ns-store', () => {
    it('自动建表并导入数据', function(done) {
      this.timeout(10000);
      testFetch(done);
    });

});
