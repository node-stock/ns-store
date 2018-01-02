import { Table, Column, Model, DataType, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'asset',
  comment: '资产'
})
export default class Asset extends Model<Asset> {

  @Column({
    primaryKey: true,
    type: DataType.STRING(10),
    comment: '资产名'
  })
  asset: string;

  @ForeignKey(() => Account)
  @Column
  account_id: string;

  @Column({
    type: DataType.STRING(10),
    comment: '商品类型'
  })
  type: string;

  @Column({
    type: DataType.INTEGER(10),
    comment: '小数点精度'
  })
  amount_precision: string;

  @Column({
    type: DataType.STRING(20),
    comment: '保有量'
  })
  onhand_amount: string;

  @Column({
    type: DataType.STRING(20),
    comment: '锁定量'
  })
  locked_amount: string;

  @Column({
    type: DataType.STRING(20),
    comment: '可使用量'
  })
  free_amount: string;

  @Column({
    type: DataType.CHAR(1),
    comment: '回测模式'
  })
  backtest: string;

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
