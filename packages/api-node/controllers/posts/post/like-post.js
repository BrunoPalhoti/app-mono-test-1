import pool, { isUserActive, hasUserLikedPost } from '../../../models/db.js'

export const likePost = async (req, res) => {
  const { id } = req.params
  const userId = req.body?.userId || req.query?.userId || req.headers['x-user-id']

  if (!userId) {
    return res.status(400).json({ message: 'userId é obrigatório' })
  }

  const active = await isUserActive(userId)
  if (!active) {
    return res.status(403).json({ message: 'Usuário inativo ou não encontrado' })
  }

  const alreadyLiked = await hasUserLikedPost(userId, id)
  if (alreadyLiked) {
    return res.status(400).json({ message: 'Você já deu like neste post' })
  }

  try {
    await pool.query('INSERT INTO post_likes (user_id, post_id) VALUES ($1, $2)', [userId, id])
    const result = await pool.query('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING id, likes', [id])
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Post not found' })
    }

    return res.status(200).json(result.rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao dar like', error })
  }
}
