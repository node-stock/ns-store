import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Account from './account';
import SymbolInfo from './symbolinfo';
import Order from './order';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '订单'
})
export default class Transaction extends Model<Transaction> {

  @ForeignKey(() => Account)
  @Column({
    type: DataType.STRING(20),
    comment: '账户'
  })
  account: string;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.STRING(20),
    comment: '订单'
  })
  order: string;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.CHAR(2),
    comment: '方向'
  })
  side: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: '价格'
  })
  price: number;

  @Column({
    type: DataType.INTEGER(10),
    comment: '股数'
  })
  quantity: number;
}
