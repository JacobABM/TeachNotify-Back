import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsuarioGrupos extends BaseSchema {
  protected tableName = 'usuario_grupos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuarios')
      .notNullable()
      .unsigned()
      .references('usuarios.id')
      .onDelete('CASCADE')
      table.integer('Grupo')
      .notNullable()
      .unsigned()
      .references('grupos.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
