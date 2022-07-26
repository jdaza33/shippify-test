/**
 * Esquema del banco
 */

//Modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema
const BankSchema = new Schema({
  name: { type: String, required: true },
  tax: { type: Number, required: true }, //Porcentaje

  insurance: { type: Number, required: true }, //Porcentaje
  insuranceTop: { type: Number, required: true }, //Valor fijo

  service: { type: Number, required: true }, //Porcentaje

  //Numero de veces que el cliente puede ir al banco
  timesGoToBank: { type: Number, required: true }, //Valor fijo

  //Monto a sumar si va despues de cierto periodo
  extraPrice: { type: Number, required: true }, //Valor fijo

  commissionCredit: { type: Number, required: true }, //Porcentaje
  commissionDebit: { type: Number, required: true }, //Porcentaje
  amountMonth: { type: Number, required: true }, //Valor fijo
})

module.exports = mongoose.model('Banks', BankSchema)
