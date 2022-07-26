/**
 * Esquema del cliente
 */

//Modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema
const ClientSchema = new Schema({
  name: { type: String, required: true },
})

module.exports = mongoose.model('Clients', ClientSchema)
