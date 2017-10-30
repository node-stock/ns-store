import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Market } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'exchange',
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
    type: DataType.STRING(10),
    comment: '略称'
  })
  shortname: string;

  @Column({
    type: DataType.STRING(200),
    comment: '描述'
  })
  description: string;

  @HasMany(() => Market)
  markets: Market[];

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
