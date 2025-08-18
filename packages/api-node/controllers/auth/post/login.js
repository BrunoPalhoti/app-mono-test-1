import jwt from 'jsonwebtoken'
import db from '../../../models/db.js'
import { createClient } from 'redis'

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

// Cria e conecta o cliente Redis
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`
})
redisClient.connect()

export const login = async (req, res) => {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const result = await db.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]

  if (!user || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    profileType: user.profile_type,
    avatar: user.avatar
  }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })

  // Salva o token no Redis com o id do usuário como chave
  await redisClient.set(`token:${user.id}`, token, { EX: 3600 })

  const profile = {
    id: user.id,
    email: user.email,
    name: user.name,
    profileType: user.profile_type,
    avatar: user.avatar
  }
  return res.json({ token, profile })
}
