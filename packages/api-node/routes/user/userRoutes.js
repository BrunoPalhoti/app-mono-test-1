import { Router } from 'express'
import { getUsers } from '../../controllers/user/get/get-user.js'
import { createUser } from '../../controllers/user/post/create-user.js'
import { updateUser } from '../../controllers/user/patch/update-user.js'

const router = Router()

router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.patch('/updateUser/:id', updateUser)

export default router
