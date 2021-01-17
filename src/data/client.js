require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(process.env.DATABASE_URL, { useUnifiedTopology: true })
client.connect()

module.exports = client