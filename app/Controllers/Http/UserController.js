'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ request, response }) {
    const query = request.get()
    let usersQuery = User.query()

    // /* FILTER : ?clients=1 */
    if (query.clients) {
      usersQuery.with('clients')
    }

    // /* FILTER : ?skills=1 */
    if (query.skills) {
      usersQuery.with('skills')
    }

    // /* FILTER : ?skills_clients=1 */
    if (query.skills_clients) {
      usersQuery.with('skills_clients')
    }

    const users = await usersQuery.fetch()

    return response.json(users)
  }

  async show({ request, response, params }) {
    let relations = ['clients', 'skills']
    const user = await User.find(params.id)

    if (!user) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    // /* FILTER : ?skills_clients=1 */
    if (request.get().skills_clients) {
      relations.push('skills_clients')
    }

    await user.loadMany(relations)

    return response.json(user)
  }
}

module.exports = UserController
