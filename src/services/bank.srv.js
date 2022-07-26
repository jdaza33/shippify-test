/**
 * @description Servicio de bancos
 */

//Models
const Bank = require('../models/Bank')

/**
 *
 * @param {Object} data
 * @returns Bank
 */
const createBank = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bank = await Bank.create(data)
      return resolve(bank)
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
const listBank = (filters = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const banks = await Bank.find(filters).lean()
      return resolve(banks)
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = { createBank, listBank }
