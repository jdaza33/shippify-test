/**
 * @description
 */

require('dotenv').config()

//Loaders
const { startMongoose } = require('./database.loader')
const { startLogger } = require('./logger.loader')
const { startExpress } = require('./server.loader')

const init = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await startLogger()
      await startMongoose()

      const app = await startExpress()

      return resolve(app)
    } catch (error) {
      return reject(error)
    }
  })
}

init()
  .then((app) => {
    app.listen(process.env.PORT, () => {
      logger.info(`Servidor iniciado en el puerto ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
    throw new Error(err)
  })
