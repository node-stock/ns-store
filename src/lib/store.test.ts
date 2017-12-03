import * as assert from 'power-assert';
import { Store } from './store';
import { Sequelize } from 'sequelize-typescript';

const testBuildTable = async () => {
  await Store.buildTable();
  assert(true);
}

const testFindAll = async () => {
  const sectorList = await Store.model.Sector.findAll({ raw: true });
  assert(sectorList.length !== 0);
  console.log(sectorList[0]);
}

describe('ns-store', () => {
  before(async () => {
    console.log('测试预处理');
    await Store.init(require('config').store);
  });
  it('自动建表并导入数据', testBuildTable);
  it('findAll查询数据', testFindAll);
  after(async () => {
    console.log('测试后处理');
    await Store.close();
  });
});
