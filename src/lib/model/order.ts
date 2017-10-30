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
    comment: '订单号'
  })
  no: string;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.STRING(20),
    comment: '账户'
  })
  account: string;

  @ForeignKey(() => SymbolInfo)
  @Column({
    type: DataType.STRING(20),
    comment: '商品代码'
  })
  symbol: string;

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
    type: DataType.INTEGER(10),
    comment: '股数'
  })
  quantity: number;

  @Column({
    type: DataType.CHAR(2),
    comment: '状态'
  })
  state: number;

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
