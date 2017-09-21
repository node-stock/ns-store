import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Exchange from './exchange';
import Market from './market';
import Sector from './sector';
import Industry from './industry';

@Table({
  tableName: 'symbol_info',
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '商品'
})
export default class SymbolInfo extends Model<SymbolInfo> {

  @Column({
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

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

  @Column({
    type: DataType.STRING(20),
    comment: '名称'
  })
  name: string;

  @Column({
    type: DataType.STRING(40),
    comment: '全名'
  })
  full_name: string;

  @Column({
    type: DataType.CHAR(2),
    comment: '类型'
  })
  type: string;

  @ForeignKey(() => Sector)
  @Column({
    type: DataType.CHAR(3),
    comment: '板块'
  })
  sector: string;

  @ForeignKey(() => Industry)
  @Column({
    type: DataType.CHAR(3),
    comment: '行业'
  })
  industry: string;
}
