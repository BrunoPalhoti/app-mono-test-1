import { Router } from 'express'
import { getUsers } from '../../controllers/user/get/get-user.js'
import { createUser } from '../../controllers/user/post/create-user.js'
import { updateUser } from '../../controllers/user/patch/update-user.js'
import { deleteUser } from '../../controllers/user/delete/delete-user.js'
import { authenticate } from '../../auth/authenticate.js'

const router = Router()

router.get('/getUsers', authenticate, getUsers)
router.post('/createUser', authenticate, createUser)
router.patch('/updateUser/:id', authenticate, updateUser)
router.delete('/deleteUser/:id', authenticate, deleteUser)

export default router
