import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test Endpoint responce', () => {
	it('gets the api endpoint',  async () => {
		const responce =  await request.get('/api')
		expect(responce.status).toBe(200)
	})
})
