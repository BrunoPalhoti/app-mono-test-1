import request from 'supertest'
import app from '../../app.js'

/* global describe, test, expect */

describe('Users endpoints', () => {
  test('GET /users/getUsers - retorna lista', async () => {
    const res = await request(app).get('/users/getUsers')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('POST /users/createUser - cria usuário', async () => {
    const newUser = { name: 'Teste', email: 'teste@example.com', age: 30, profileType: 'user' }
    const res = await request(app).post('/users/createUser').send(newUser)
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('created')
    expect(res.body.created).toMatchObject(expect.objectContaining({ name: 'Teste', email: 'teste@example.com' }))

    const createdId = res.body.created.id
    expect(createdId).toBeDefined()
  })

  test('PATCH /users/updateUser/:id - atualiza usuário', async () => {
    const create = await request(app).post('/users/createUser').send({ name: 'Updatable', email: 'up@example.com' })
    const id = create.body.created.id
    const res = await request(app).patch(`/users/updateUser/${id}`).send({ name: 'Updated Name' })
    expect(res.statusCode).toBe(200)
    expect(res.body.user).toHaveProperty('name', 'Updated Name')
  })

  test('DELETE /users/deleteUser/:id - remove usuário', async () => {
    const create = await request(app).post('/users/createUser').send({ name: 'Removeme', email: 'rm@example.com' })
    const id = create.body.created.id
    const res = await request(app).delete(`/users/deleteUser/${id}`)
    expect(res.statusCode).toBe(200)

    const list = await request(app).get('/users/getUsers')
    expect(list.body.find((u) => u.id === String(id))).toBeUndefined()
  })
})
