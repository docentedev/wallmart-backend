const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/wallmart?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useUnifiedTopology: true })

client.connect()

module.exports = client