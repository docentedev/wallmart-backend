const express = require('express')
const discountsData = require('../data/discounts')

module.exports = (app) => {
    const router = express.Router()
    router.get('/', async (_, res) => {
        try {
            const discounts = await discountsData.getAll()
            res.json({ data: discounts })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    })
    app.use('/api/v1/discounts', router)
}