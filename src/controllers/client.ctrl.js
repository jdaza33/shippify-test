/**
 * @description Controlador de clientes
 */

//Services
const { listClients, createClient } = require('../services/client.srv')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const saveClient = async (req, res, next) => {
  try {
    const client = await createClient(req.body)
    res.json({ success: true, client })
  } catch (error) {
    next(error)
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const listAllClients = async (req, res, next) => {
  try {
    const clients = await listClients(req.body)
    res.json({ success: true, clients })
  } catch (error) {
    next(error)
  }
}

module.exports = { listAllClients, saveClient }
