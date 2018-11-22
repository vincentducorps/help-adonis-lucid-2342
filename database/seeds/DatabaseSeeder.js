'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run() {
    /* Create clients */
    const client1 = await Factory.model('App/Models/Client').create({ name: 'Client 1' })
    const client2 = await Factory.model('App/Models/Client').create({ name: 'Client 2' })
    const client3 = await Factory.model('App/Models/Client').create({ name: 'Client 3' })
    await Factory.model('App/Models/Client').create({ name: 'Client 4' })
    await Factory.model('App/Models/Client').create({ name: 'Client 5' })


    /* Create skills */
    const skill1 = await Factory.model('App/Models/Skill').create({ name: 'Skill 1' })
    const skill2 = await Factory.model('App/Models/Skill').create({ name: 'Skill 2' })
    const skill3 = await Factory.model('App/Models/Skill').create({ name: 'Skill 3' })
    const skill4 = await Factory.model('App/Models/Skill').create({ name: 'Skill 4' })
    const skill5 = await Factory.model('App/Models/Skill').create({ name: 'Skill 5' })
    const skill6 = await Factory.model('App/Models/Skill').create({ name: 'Skill 6' })
    await Factory.model('App/Models/Skill').create({ name: 'Skill 7' })
    await Factory.model('App/Models/Skill').create({ name: 'Skill 8' })
    await Factory.model('App/Models/Skill').create({ name: 'Skill 9' })
    await Factory.model('App/Models/Skill').create({ name: 'Skill 10' })


    /* Create users */
    const devUser = await Factory.model('App/Models/User').create({
      firstname: 'Harminder',
      lastname: 'Virk',
    })

    await Factory.model('App/Models/User').createMany(50)


    /* Relationships */
    const devUserSkill1 = await devUser.skills().attach(skill1.id)
    const devUserSkill2 = await devUser.skills().attach(skill2.id)
    const devUserSkill3 = await devUser.skills().attach(skill3.id)
    const devUserSkill4 = await devUser.skills().attach(skill4.id)
    const devUserSkill5 = await devUser.skills().attach(skill5.id)
    const devUserSkill6 = await devUser.skills().attach(skill6.id)

    const devUserClient1 = await devUser.clients().attach(client1.id)
    const devUserClient2 = await devUser.clients().attach(client2.id)
    const devUserClient3 = await devUser.clients().attach(client3.id)

    /**
    *
    * How to attach devUserSkill1 to devUserClient1 in user_skills_clients table ??
    *
    * */
  }
}

module.exports = DatabaseSeeder
