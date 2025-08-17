import express from 'express'
import userRoutes from './routes/user/userRoutes.js'
import postsRoutes from './routes/posts/postsRoutes.js'
import authRoutes from './routes/auth/authRoutes.js'

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/posts', postsRoutes)
app.use('/auth', authRoutes)

export default app
