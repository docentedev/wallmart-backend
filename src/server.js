const express = require('express')
const cors = require('cors')
const healthRotuer = require('./routers/health')
const productsRotuer = require('./routers/products')
const discountsRotuer = require('./routers/discounts')

const app = express()
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))


healthRotuer(app)
productsRotuer(app)
discountsRotuer(app)

module.exports = app