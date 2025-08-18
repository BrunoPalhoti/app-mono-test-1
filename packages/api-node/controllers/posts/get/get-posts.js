import db from '../../../models/db.js'

export const getPosts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM posts ORDER BY created_at DESC')
    return res.status(200).json(result.rows)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar posts', error })
  }
}
