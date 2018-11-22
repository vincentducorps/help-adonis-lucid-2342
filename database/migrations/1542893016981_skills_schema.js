'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })

    this.create('user_skills', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.integer('skill_id').unsigned()
      table.foreign('skill_id').references('skills.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
