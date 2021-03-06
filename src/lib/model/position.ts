import { Table, Column, Model, DataType, ForeignKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'position',
  comment: '持仓'
})
export default class Position extends Model<Position> {

  @AutoIncrement
  @Column({
    type: DataType.INTEGER(20),
    primaryKey: true,
    comment: '持仓id'
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
    comment: '股数'
  })
  quantity: string;

  @Column({
    type: DataType.STRING(20),
    comment: '价格'
  })
  price: string;

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
