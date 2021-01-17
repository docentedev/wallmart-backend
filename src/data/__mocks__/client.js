const products = require('./data/products')
const discounts = require('./data/discounts')

const client = {
    db: () => {
        return {
            collection: (col) => {
                return {
                    find: async(q) => {
                        console.log(q)
                        return {
                            toArray: async() => {
                                if(col === 'products') {
                                    if(q && q.brand) {
                                        return products.filter(p => p.brand === q.brand)
                                    }
                                    return products
                                }
                                if(col === 'discounts') return discounts
                                return []
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = client