const express = require('express')
const productsData = require('../data/products')

module.exports = (app) => {
    const router = express.Router()
    router.get('/', async (req, res) => {
        try {
            const products = await productsData.getAll({
                brand: req.query.brand,
            })
            res.json({ data: products.map(p => ({ ...p, image: `https://${p.image}` })) })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    })
    app.use('/api/v1/products', router)
}