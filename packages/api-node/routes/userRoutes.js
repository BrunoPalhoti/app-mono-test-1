import { Router } from 'express'
import { getUsers, createUser } from '../controllers/user/userController.js'

const router = Router()

router.get('/getUsers', getUsers)
router.post('/createUser', createUser)

export default router
