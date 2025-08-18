import pool from '../../../models/db.js'

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users')
    return res.json(result.rows)
  } catch (error) {
    console.log('Error fetching users:', error)
    return res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}
