import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'signal',
  comment: '信号'
})
export default class Signal extends Model<Signal> {

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
    type: DataType.STRING(10),
    comment: '备注'
  })
  notes: string;

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
