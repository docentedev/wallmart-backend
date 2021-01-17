const request = require('supertest')
const app = require('../../server')

jest.mock('../../data/client')

describe('Get Products', () => {
  it('should get All Products', async () => {
    const res = await request(app)
      .get('/api/v1/products')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})