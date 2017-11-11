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
  order: string;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.CHAR(4),
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
