import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Account, SymbolInfo, Order } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '交易记录'
})
export default class Transaction extends Model<Transaction> {

  @ForeignKey(() => Order)
  @Column({
    type: DataType.STRING(20),
    comment: '订单'
  })
  order: string;

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

  @Column
  get created_at(): string {
    return this.getDataValue('created_at');
  }

  @Column
  get updated_at(): string {
    return this.getDataValue('updated_at');
  }

  @Column
  get deleted_at(): string {
    return this.getDataValue('deleted_at');
  }
}
