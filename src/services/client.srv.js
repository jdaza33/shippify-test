/**
 * @description Servicio de clientes
 */

//Models
const Client = require('../models/Client')

/**
 *
 * @param {Object} data
 * @returns Client
 */
const createClient = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await Client.create(data)
      return resolve(client)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 *
 * @param {*} filters
 * @returns
 */
const listClients = (filters = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const clients = await Client.find(filters).lean()
      return resolve(clients)
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = { createClient, listClients }
