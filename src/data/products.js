const client = require('./client')

const getAll = async () => {
    try {
        const cursor = await client.db().collection('products').find({})
        const results = await cursor.toArray()
        return results
    } catch (_) {
        throw new Error('products.getAll error');
    }
}

module.exports = {
    getAll,
}