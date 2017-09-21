import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Exchange from './exchange';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '行业'
})
export default class Industry extends Model<Industry> {

  @Column({
    primaryKey: true,
    type: DataType.CHAR(3),
    comment: '代码'
  })
  code: string;

  @ForeignKey(() => Exchange)
  @Column({
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
}
