import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Market from './market';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '交易所'
})
export default class Exchange extends Model<Exchange> {

  @Column({
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '代码'
  })
  code: string;

  @Column({
    type: DataType.STRING(50),
    comment: '名称'
  })
  name: string;

  @Column({
    type: DataType.STRING(200),
    comment: '描述'
  })
  description: string;

  @HasMany(() => Market)
  markets: Market[];
}
