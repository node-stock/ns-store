import { Template } from './template';
import * as assert from 'power-assert';
import { Sequelize} from 'sequelize-typescript';
import Sector from './models/sector';

const config = require('../../config/config');
config.modelPaths = [__dirname + '/models'];

const sequelize = new Sequelize(config);

console.log(__dirname + '/models');

const testFetch  = async () => {

  const res = await sequelize.sync({force: true});
  const sectorData = require('../../data/sector');
  await Sector.bulkCreate(sectorData);
}


describe('bronx-template', () => {

    it('should do test', testFetch);

});

/*
const config = require('config');


const doTest = async () => {


  assert(true);

};

describe('bronx-template', () => {

  it('should do test', doTest);

});
*/
