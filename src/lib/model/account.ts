import { Table, Column, Model, DataType, ForeignKey, PrimaryKey, HasMany } from 'sequelize-typescript';
import { Position, Transaction } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '账户'
})
export default class Account extends Model<Account> {

  @Column({
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '账户id'
  })
  id: string;

  @HasMany(() => Position)
  positions: Position[];

  @HasMany(() => Transaction)
  transactions: Transaction[];

  @Column({
    type: DataType.BIGINT(20),
    comment: '可用资金'
  })
  cash: string;

  @Column({
    type: DataType.BIGINT(20),
    comment: '冻结资金'
  })
  frozen_cash: string;

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
