/**
 * Esquema del banco
 */

//Modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema
const TrasactionSchema = new Schema({
  bankId: { type: String, required: true, ref: 'Banks' },
  clientId: { type: String, required: true, ref: 'Clients' },
  amount: { type: Number, required: true },
  datetime: { type: Number, required: true }, //Tiempo en milisegundos
  event: { type: String, required: true, enum: ['debit', 'credit'] },
})

module.exports = mongoose.model('Trasactions', TrasactionSchema)
