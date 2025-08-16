import request from 'supertest'
import app from '../../app.js'

/* global describe, test, expect */

describe('Posts endpoints', () => {
  test('GET /posts - lista posts', async () => {
    const res = await request(app).get('/posts/')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('POST /posts - cria post', async () => {
    const res = await request(app).post('/posts/').send({ title: 'Novo', content: 'Conteúdo' })
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('title', 'Novo')
  })

  test('POST /posts/:id/like - incrementa like (autenticado)', async () => {
    const login = await request(app).post('/auth/login').send({ email: 'test@example.com', password: 'password' })
    expect(login.statusCode).toBe(200)
    const token = login.body.token

    const create = await request(app).post('/posts/').send({ title: 'Likeable', content: 'x' })
    const id = create.body.id

    const resNoAuth = await request(app).post(`/posts/${id}/like`)
    expect(resNoAuth.statusCode).toBe(401)

    const res = await request(app).post(`/posts/${id}/like`).set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('likes')
    expect(typeof res.body.likes).toBe('number')
  })
})
