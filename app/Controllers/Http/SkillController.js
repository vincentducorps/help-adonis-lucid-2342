'use strict'

const Skill = use('App/Models/Skill')

class SkillController {
  async index({ request, response }) {
    const skills = await Skill.all()
    return response.json(skills)
  }
}

module.exports = SkillController
