import { Table, Column, Model, DataType, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'earning',
  comment: '收益'
})
export default class Earning extends Model<Earning> {

  @AutoIncrement
  @Column({
    type: DataType.INTEGER(20),
    primaryKey: true,
    comment: '收益id'
  })
  id: number;

  @ForeignKey(() => Account)
  @Column
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.CHAR(10),
    comment: '方向'
  })
  side: string;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '股数'
  })
  quantity: number;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '利润'
  })
  profit: number;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '开仓价格'
  })
  open: number;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '平仓价格'
  })
  close: number;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '手续费'
  })
  fee: number;

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
