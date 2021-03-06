import { Table, Column, Model, DataType, ForeignKey, Scopes, BelongsTo, HasOne } from 'sequelize-typescript';
import { Exchange, Market, Sector, Industry } from '../model';

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
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '交易所'
  })
  exchange: string;

  @BelongsTo(() => Exchange)
  ex?: Exchange;

  @ForeignKey(() => Market)
  @Column({
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '交易市场'
  })
  market: string;

  @BelongsTo(() => Market)
  ma?: Market;

  @Column({
    type: DataType.STRING(50),
    comment: '名称'
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
    comment: '全名'
  })
  full_name: string;

  @Column({
    type: DataType.STRING(20),
    comment: '类型'
  })
  type: string;

  @ForeignKey(() => Sector)
  @Column({
    type: DataType.STRING(50),
    comment: '板块'
  })
  sector: string;

  @BelongsTo(() => Sector)
  se?: Sector;

  @ForeignKey(() => Industry)
  @Column({
    type: DataType.STRING(20),
    comment: '行业'
  })
  industry: string;

  @BelongsTo(() => Industry)
  in?: Industry;

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
