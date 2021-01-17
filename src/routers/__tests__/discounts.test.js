const request = require('supertest')
const app = require('../../server')

jest.mock('../../data/client')

describe('Get Discounts', () => {
  it('should get all Discounts', async () => {
    const res = await request(app)
      .get('/api/v1/discounts')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})