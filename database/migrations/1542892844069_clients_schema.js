'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })

    this.create('user_clients', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.integer('client_id').unsigned()
      table.foreign('client_id').references('clients.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('user_clients')
    this.drop('clients')
  }
}

module.exports = ClientsSchema
