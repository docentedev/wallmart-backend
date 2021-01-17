const client = require('./client')

const getAll = async () => {
    try {
        const cursor = await client.db().collection('discounts').find({})
        const results = await cursor.toArray()
        return results
    } catch (e) {
        console.log(e)
        throw new Error('discounts.getAll error');
    }
}

module.exports = {
    getAll,
}