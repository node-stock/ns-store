import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account, SymbolInfo, Order } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'transaction',
  comment: '交易记录'
})
export default class Transaction extends Model<Transaction> {

  @ForeignKey(() => Account)
  @Column
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.STRING(20),
    comment: '订单'
  })
  order_no: string;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.STRING(10),
    comment: '商品类型'
  })
  type: string;

  @Column({
    type: DataType.CHAR(10),
    comment: '方向'
  })
  side: string;

  @Column({
    type: DataType.STRING(20),
    comment: '价格'
  })
  price: string;

  @Column({
    type: DataType.STRING(20),
    comment: '股数'
  })
  quantity: string;

  @Column({
    type: DataType.CHAR(1),
    comment: '回测模式'
  })
  backtest: string;

  @Column({
    type: DataType.STRING(20),
    comment: '模拟时间'
  })
  mocktime: string;

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
