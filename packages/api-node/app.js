import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user/userRoutes.js'
import postsRoutes from './routes/posts/postsRoutes.js'
import authRoutes from './routes/auth/authRoutes.js'

const app = express()
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
app.use(express.json());

app.use('/users', userRoutes)
app.use('/posts', postsRoutes)
app.use('/auth', authRoutes)

export default app
