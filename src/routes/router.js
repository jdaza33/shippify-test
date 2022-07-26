/**
 * @description Rutas de endpoints
 */

//Modules
const express = require('express')
const route = express.Router()

//Controllers
const bankCtrl = require('../controllers/bank.ctrl')
const clientCtrl = require('../controllers/client.ctrl')
const transactionCtrl = require('../controllers/transaction.ctrl')

//Endpoints

/** BANK */
route.post('/bank/create', bankCtrl.saveBank)
route.post('/bank/list', bankCtrl.listAllBanks)

/** CLIENT */
route.post('/client/create', clientCtrl.saveClient)
route.post('/client/list', clientCtrl.listAllClients)

/** TRANSACTION */
route.post('/transaction/create', transactionCtrl.saveTransaction)
route.get('/transaction/list/:clientId', transactionCtrl.listAllByClient)
route.get('/transaction/summary', transactionCtrl.summary)

module.exports = route
