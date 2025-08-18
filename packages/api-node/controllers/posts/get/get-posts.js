import db from '../../../models/db.js'

export const getPosts = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT posts.*, users.name as user_name, users.avatar 
      FROM posts
      JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
    `)
    return res.status(200).json(result.rows)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar posts', error })
  }
}
