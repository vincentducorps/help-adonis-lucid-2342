'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSkillsClientsSchema extends Schema {
  up () {
    this.create('user_skills_clients', (table) => {
      table.increments()
      table.integer('user_skill_id').unsigned()
      table.foreign('user_skill_id').references('user_skills.id').onDelete('cascade')
      table.integer('user_client_id').unsigned()
      table.foreign('user_client_id').references('user_clients.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('user_skills_clients')
  }
}

module.exports = UserSkillsClientsSchema
