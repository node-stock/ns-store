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
    type: DataType.STRING(20),
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
