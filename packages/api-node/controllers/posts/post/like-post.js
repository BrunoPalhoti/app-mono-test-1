import pool from '../../../models/db.js'

export const likePost = async (req, res) => {
  const { id } = req.params
  const userId = req.body?.userId || req.query?.userId || req.headers['x-user-id']

  if (!userId) {
    return res.status(400).json({ message: 'userId é obrigatório' })
  }

  const userResult = await pool.query('SELECT * FROM users WHERE id = $1 AND active = true', [userId])
  if (userResult.rowCount === 0) {
    return res.status(403).json({ message: 'Usuário inativo ou não encontrado' })
  }

  const likeResult = await pool.query('SELECT * FROM post_likes WHERE user_id = $1 AND post_id = $2', [userId, id])
  if (likeResult.rowCount > 0) {
    return res.status(400).json({ message: 'Você já deu like neste post' })
  }

  try {
    await pool.query('INSERT INTO post_likes (user_id, post_id) VALUES ($1, $2)', [userId, id])

    const result = await pool.query('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING id, likes', [id])
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Post not found' })
    }
    console.log(`Usuário que deu like: ${userId}`)
    return res.status(200).json(result.rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao dar like', error })
  }
}
