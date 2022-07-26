/**
 * @description Servicio de transacciones
 */

//Modules
const moment = require('moment')

//Models
const Transaction = require('../models/Transaction')
const Bank = require('../models/Bank')

/**
 *
 * @param {Object} data
 * @returns Transaction
 */
const createTransaction = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      data.datetime = !data.datetime
        ? moment().valueOf()
        : moment(data.datetime).valueOf()

      const transaction = await Transaction.create(data)
      return resolve(transaction)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 *
 * @param {ObjectID} clientId
 * @returns
 */
const listByClient = (clientId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactions = await Transaction.find({ clientId }).lean()
      return resolve(transactions)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 *
 * @param {ObjectID} bankId
 * @param {ObjectID} clientId
 * @param {Number} month
 * @param {Number} year
 * @returns
 */
const summaryByBankAndClient = (bankId, clientId, month, year) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bank = await Bank.findOne({ _id: bankId }).lean()
      const transactions = await Transaction.find({ bankId, clientId }).lean()

      const trx = transactions
        .filter(
          (t) =>
            moment(t.datetime).isSame(
              moment().set('month', parseInt(month) - 1),
              'month'
            ) && moment(t.datetime).isSame(moment().set('year', year), 'year')
        )
        .map((t, i, arr) => {
          const tmp = { ...t }
          tmp.insurance = -(t.amount > bank.insuranceTop
            ? (bank.insurance / 100) * t.amount
            : 0)
          tmp.service = -(arr.length === bank.timesGoToBank
            ? (bank.service / 100) * t.amount
            : arr.length > bank.timesGoToBank
            ? (bank.service / 100) * t.amount +
              (arr.length - bank.timesGoToBank) * bank.extraPrice
            : 0)

          const amountTotal = arr.reduce((a, v) => (a += v.amount), 0)

          tmp.commission =
            amountTotal > bank.amountMonth && t.event === 'debit'
              ? (bank.commissionDebit / 100) * t.amount
              : amountTotal > bank.amountMonth && t.event === 'credit'
              ? (bank.commissionCredit / 100) * t.amount
              : 0

          return tmp
        })

      const finalAmount = trx.reduce((acum, t) => {
        acum += t.amount + t.insurance + t.service - t.commission
        return acum
      }, 0)

      const result = {
        bank,
        transactions: trx,
        finalAmount: parseFloat(
          (finalAmount + (bank.tax / 100) * finalAmount).toFixed(2)
        ),
      }
      return resolve(result)
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = { createTransaction, listByClient, summaryByBankAndClient }
