import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Grupo extends BaseModel {

  public static table='grupos'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre: string
}
