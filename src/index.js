const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const healthRotuer = require('./routers/health')
const app = express()
const port = process.env.PORT || 3000

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.lzjnu.mongodb.net/wallmart?retryWrites=true&w=majority`;

app.get('/api/v1/products', async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        const cursor = await client.db().collection('products').find({})
        const results = await cursor.toArray()
        res.send(results)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
})

healthRotuer(app)

app.listen(port, () => console.log(port))