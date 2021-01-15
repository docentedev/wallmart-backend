const express = require('express')

module.exports = (app) => {
  const router = express.Router()

  router.get('/', (_, res) => {
    res.json({ status: 'UP' })
  })

  app.use('/health', router)
}