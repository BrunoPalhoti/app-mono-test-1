import { Router } from 'express'
import { createUser, updateUser, deleteUser } from '../../controllers/user/userController.js'
import { getUsers } from '../../controllers/user/get/get-user.js'

const router = Router()

router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.patch('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

export default router
