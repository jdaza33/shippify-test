/**
 * @description Controlador de transacciones
 */

//Services
const {
  createTransaction,
  listByClient,
  summaryByBankAndClient,
} = require('../services/transaction.srv')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const saveTransaction = async (req, res, next) => {
  try {
    const transaction = await createTransaction(req.body)
    res.json({ success: true, transaction })
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
const listAllByClient = async (req, res, next) => {
  try {
    const transactions = await listByClient(req.params.clientId)
    res.json({ success: true, transactions })
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
const summary = async (req, res, next) => {
  try {
    const { clientId, bankId, month, year } = req.query
    const results = await summaryByBankAndClient(bankId, clientId, month, year)
    res.json({ success: true, results })
  } catch (error) {
    next(error)
  }
}

module.exports = { saveTransaction, listAllByClient, summary }
