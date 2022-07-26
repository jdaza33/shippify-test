/**
 * @description Controlador de bancos
 */

//Services
const { listBank, createBank } = require('../services/bank.srv')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const saveBank = async (req, res, next) => {
  try {
    const bank = await createBank(req.body)
    res.json({ success: true, bank })
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
const listAllBanks = async (req, res, next) => {
  try {
    const banks = await listBank(req.body)
    res.json({ success: true, banks })
  } catch (error) {
    next(error)
  }
}

module.exports = { listAllBanks, saveBank }
