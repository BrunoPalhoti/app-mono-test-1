import request from 'supertest'
import app from '../../app.js'

/* global describe, test, expect */

describe('Auth endpoints', () => {
  test('POST /auth/login - sucesso com credenciais válidas', async () => {
    const res = await request(app).post('/auth/login').send({ email: 'test@example.com', password: 'password' })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(typeof res.body.token).toBe('string')
  })

  test('POST /auth/login - falha com credenciais inválidas', async () => {
    const res = await request(app).post('/auth/login').send({ email: 'test@example.com', password: 'wrong' })
    expect(res.statusCode).toBe(401)
  })
})
