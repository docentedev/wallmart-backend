const express = require('express')
const cors = require('cors')

const healthRotuer = require('./routers/health')
const productsRotuer = require('./routers/products')
const discountsRotuer = require('./routers/discounts')

const app = express()
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))

const port = process.env.PORT || 3001

healthRotuer(app)
productsRotuer(app)
discountsRotuer(app)

app.listen(port, () => console.log(port))