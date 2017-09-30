import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Exchange } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '板块'
})
export default class Sector extends Model<Sector> {

  @Column({
    primaryKey: true,
    type: DataType.STRING(50),
    comment: '代码'
  })
  code: string;

  @ForeignKey(() => Exchange)
  @Column({
    primaryKey: true,
    type: DataType.STRING(20),
    comment: '交易所'
  })
  exchange: string;

  @Column({
    type: DataType.STRING(50),
    comment: '名称'
  })
  name: string;

  @Column({
    type: DataType.STRING(20),
    comment: '日语名称'
  })
  jp_name: string;

  @Column({
    type: DataType.STRING(200),
    comment: '描述'
  })
  description: string;

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
