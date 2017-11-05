import { Table, Column, Model, DataType, ForeignKey, AutoIncrement } from 'sequelize-typescript';
import { SymbolInfo } from '../model';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'dde',
  comment: 'DDE实时数据'
})
export default class Dde extends Model<Dde> {

  @AutoIncrement
  @Column({
    type: DataType.INTEGER(20),
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING(10),
    comment: '日期',
    primaryKey: true
  })
  date: string;

  @Column({
    type: DataType.STRING(10),
    comment: '服务名',
    primaryKey: true
  })
  service: string;

  @Column({
    type: DataType.STRING(20),
    comment: '主题名',
    primaryKey: true
  })
  topic: string;

  @Column({
    type: DataType.STRING(50),
    comment: '数据项目名',
    primaryKey: true
  })
  item: string;

  @Column({
    type: DataType.STRING(50),
    comment: '数据内容'
  })
  text: string;

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
