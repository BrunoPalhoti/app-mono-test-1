import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
})

export default pool

export async function isUserActive(userId) {
  const userResult = await pool.query('SELECT * FROM users WHERE id = $1 AND active = true', [userId])
  return userResult.rowCount > 0
}

export async function hasUserLikedPost(userId, postId) {
  const likeResult = await pool.query('SELECT * FROM post_likes WHERE user_id = $1 AND post_id = $2', [userId, postId])
  return likeResult.rowCount > 0
}
