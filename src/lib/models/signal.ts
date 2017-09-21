import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import SymbolInfo from './symbolinfo';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '信号'
})
export default class Transaction extends Model<Transaction> {

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

  @Column({
    type: DataType.STRING(10),
    comment: '时间框架'
  })
  timeframe: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: '价格'
  })
  price: number;
}
