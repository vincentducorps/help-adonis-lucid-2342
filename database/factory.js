'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Client', async (faker, i, data) => {
  return {
    name: data.name
  }
})

Factory.blueprint('App/Models/Skill', async (faker, i, data) => {
  return {
    name: data.name
  }
})

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    firstname: data.firstname || faker.first(),
    lastname: data.lastname || faker.last(),
  }
})
