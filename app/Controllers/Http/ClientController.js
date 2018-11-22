'use strict'

const Client = use('App/Models/Client')

class ClientController {
  async index({ request, response }) {
    const clients = await Client.all()
    return response.json(clients)
  }
}

module.exports = ClientController
