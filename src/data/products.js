const client = require('./client')

/**
 * @typedef {Object} Query
 * @property {string} brand
 */

/**
 * { brand: 'Marca1' }
 * @param {Query} query 
 */
const getAll = async (query) => {
    try {
        const q = {}
        query && query.brand && (q['brand'] = query.brand)
        const cursor = await client.db().collection('products').find(q)
        const results = await cursor.toArray()
        return results
    } catch (e) {
        console.log(e)
        throw new Error('products.getAll error');
    }
}

module.exports = {
    getAll,
}