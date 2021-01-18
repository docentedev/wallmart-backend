const request = require('supertest')
const app = require('../../server')

jest.mock('../../data/client')

describe('Get Health', () => {
  it('should get health servicer success', async () => {
    const res = await request(app)
      .get('/health')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})