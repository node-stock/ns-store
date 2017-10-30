import { Table, Column, Model, DataType, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'candlestick',
  comment: 'K线数据'
})
export default class Candlestick extends Model<Candlestick> {

  @PrimaryKey
  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @PrimaryKey
  @Column({
    type: DataType.STRING(10),
    comment: '日期'
  })
  date: string;

  @PrimaryKey
  @Column({
    type: DataType.STRING(3),
    comment: 'K线单位'
  })
  unit: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: '收盘价'
  })
  close: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: '开盘价'
  })
  open: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: '最高价'
  })
  high: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: '最低价'
  })
  low: number;

  @Column({
    type: DataType.BIGINT(50),
    comment: '成交量'
  })
  volume: number;

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
