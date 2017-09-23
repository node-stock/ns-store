import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Exchange } from '../model';

@Table({
  tableName: 'symbol_type',
  timestamps: true,
  paranoid: true,
  underscored: true,
  comment: '商品类型'
})
export default class SymbolType extends Model<SymbolType> {

  @Column({
    primaryKey: true,
    type: DataType.CHAR(3),
    comment: '类型'
  })
  type: string;

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