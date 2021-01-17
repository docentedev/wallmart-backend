const productsData = require('../products')

jest.mock('../client')

describe('ProductsData Test', () => {      
    test('should call <products> DAO without errors and retrieve 52 Products', async() => {
        const products = await productsData.getAll()
        expect(products.length).toBe(52);
    })

    test(`should call <products> DAO without errors and retrieve 
4 Products when is filtered by brand=Marca2`, async() => {
        const products = await productsData.getAll({ brand: 'Marca2' })
        expect(products.length).toBe(4);
    })
})