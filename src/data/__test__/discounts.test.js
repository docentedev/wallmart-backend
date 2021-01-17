const discountsData = require('../discounts')

jest.mock('../client')

describe('DiscountsData Test', () => {      
    test('should call <discounts> DAO without errors and retrieve 9 Discounts', async() => {
        const discounts = await discountsData.getAll()
        expect(discounts.length).toBe(9);
    })
})