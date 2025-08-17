import { Router } from 'express'
import { getUsers } from '../../controllers/user/get/get-user.js'
import { createUser } from '../../controllers/user/post/create-user.js'
import { updateUser } from '../../controllers/user/patch/update-user.js'
import { deleteUser } from '../../controllers/user/delete/delete-user.js'

const router = Router()

router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.patch('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

export default router
