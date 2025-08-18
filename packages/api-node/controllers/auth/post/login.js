import jwt from 'jsonwebtoken'
import db from '../../../models/db.js'

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

export const login = async (req, res) => {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  // Busca usuário no banco
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]

  if (!user || password !== password) {
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

  const profile = {
    id: user.id,
    email: user.email,
    name: user.name,
    profileType: user.profile_type,
    avatar: user.avatar
  }
  return res.json({ token, profile })
}
