import * as assert from 'power-assert';
import { Store } from './store';
import { Sequelize } from 'sequelize-typescript';

const testBuildTable = async (done: any) => {
  await Store.buildTable();
  assert(true);
  done();
}

const testFindAll = async (done: any) => {
  const sectorList = await Store.model.Sector.findAll({ raw: true });
  assert(sectorList.length !== 0);
  console.log(sectorList[0]);
  done();
}

describe('ns-store', () => {
  before(() => {
    console.log('测试预处理');
    Store.init(require('config').store);
  });
  it('自动建表并导入数据', function (done) {
    this.timeout(20000);
    testBuildTable(done);
  });
  it('findAll查询数据', (done) => {
    testFindAll(done);
  });
  after(() => {
    console.log('测试后处理');
    Store.close();
  });
});
