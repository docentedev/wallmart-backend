const express = require('express')
const productsData = require('../data/products')

module.exports = (app) => {
    const router = express.Router()
    router.get('/', async (_, res) => {
        try {
            const products = await productsData.getAll()
            res.json({ data: products })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    })
    app.use('/api/v1/products', router)
}