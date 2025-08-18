import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user/userRoutes.js'
import postsRoutes from './routes/posts/postsRoutes.js'
import authRoutes from './routes/auth/authRoutes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.options('*', cors())
app.use(express.json())

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Node.js',
    version: '1.0.0',
    description: 'Documentação da API Node.js com Swagger'
  },
  servers: [{ url: 'http://localhost:3333' }]
}

const options = {
  swaggerDefinition,
  apis: ['./routes/**/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/users', userRoutes)
app.use('/posts', postsRoutes)
app.use('/auth', authRoutes)

export default app
