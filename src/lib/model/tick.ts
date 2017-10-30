import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Exchange, Market, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'tick',
  comment: '逐笔数据'
})
export default class Tick extends Model<Tick> {

  @ForeignKey(() => Exchange)
  @Column({
    type: DataType.STRING(20),
    comment: '交易所'
  })
  exchange: string;

  @ForeignKey(() => Market)
  @Column({
    type: DataType.STRING(20),
    comment: '交易市场'
  })
  market: string;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.STRING(10),
    comment: '日期(YYYY-MM-DD)'
  })
  date: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: '价格'
  })
  price: number;

  @Column({
    type: DataType.BIGINT(50),
    comment: '成交量'
  })
  volume: number;

  @Column({
    type: DataType.BIGINT(50),
    comment: '成交价'
  })
  turnover: number;

  @Column({
    type: DataType.BIGINT(50),
    comment: '超出买出量'
  })
  over_vol: number;

  @Column({
    type: DataType.BIGINT(50),
    comment: '超出买入量'
  })
  under_vol: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: '卖1~10'
  })
  bid: number[];

  @Column({
    type: DataType.FLOAT(10),
    comment: '卖出量1~10'
  })
  bid_vol: number[];

  @Column({
    type: DataType.FLOAT(10),
    comment: '买1~10'
  })
  ask: number[];

  @Column({
    type: DataType.FLOAT(10),
    comment: '买入量1~10'
  })
  // TODO
  ask_vol: number[];

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
