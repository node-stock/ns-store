import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '订单'
})
export default class Order extends Model<Order> {

  @ForeignKey(() => Account)
  @Column({
    type: DataType.STRING(20),
    comment: '账户'
  })
  account: string;

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

  @Column({
    type: DataType.CHAR(2),
    comment: '状态'
  })
  state: number;
}
