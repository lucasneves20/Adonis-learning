import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Courses extends BaseSchema {
  protected tableName = 'courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('class_id').unique()
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.string('name').notNullable()
      table.text('description', 'longtext')
      table.string('path_video')
      table.string('path_image')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
