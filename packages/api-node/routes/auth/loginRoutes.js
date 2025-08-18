import express from 'express'
import { login } from '../../controllers/auth/post/login.js'

const router = express.Router()

router.post('/login', login)

export default router
