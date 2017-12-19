import { Table, Column, Model, DataType, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Account, SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'order',
  comment: '订单'
})
export default class Order extends Model<Order> {

  @PrimaryKey
  @Column({
    type: DataType.STRING(20),
    comment: '订单id'
  })
  id: string;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.STRING(20),
    comment: '账户id'
  })
  account_id: string;

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
    type: DataType.DECIMAL(20, 10),
    comment: '价格'
  })
  price: number;

  @Column({
    type: DataType.DECIMAL(20, 10),
    comment: '股数'
  })
  quantity: number;

  @Column({
    type: DataType.CHAR(10),
    comment: '状态'
  })
  status: string;

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
