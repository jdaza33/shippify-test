/**
 * @description Conexion a la base de datos de MongoDB
 */

const mongoose = require('mongoose')

const startMongoose = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      logger.info(`Base de datos conectada con éxito`)

      return resolve(connection)
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = { startMongoose }
