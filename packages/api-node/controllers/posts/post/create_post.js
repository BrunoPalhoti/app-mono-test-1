import pool from '../../../models/db.js'

export const createPost = async (req, res) => {
  const { title, content } = req.body
  const userId = req.params.userId || req.query.userId

  if (!title && !content) {
    return res.status(400).json({ message: 'title or content is required' })
  }

  if (!userId) {
    return res.status(400).json({ message: 'userId is required as query or param' })
  }

  const userResult = await pool.query('SELECT * FROM users WHERE id = $1 AND active = true', [userId])
  if (userResult.rowCount === 0) {
    return res.status(403).json({ message: 'Usuário inativo ou não encontrado' })
  }

  try {
    const result = await pool.query(
      `INSERT INTO posts (user_id, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [userId, title, content]
    )
    return res.status(201).json(result.rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar post', error })
  }
}
