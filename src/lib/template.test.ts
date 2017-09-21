import { Template } from './template';
import * as assert from 'power-assert';
import { Sequelize} from 'sequelize-typescript';

const sequelize = new Sequelize({
  host: '45.32.48.129',
  database: 'blog',
  dialect: 'mysql',
  username: 'admin',
  password: '123124',
  modelPaths: [__dirname + '/models']
});

console.log(__dirname + '/models')



const testFetch  = async () => {

  const res = await sequelize.sync({force: true});
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
