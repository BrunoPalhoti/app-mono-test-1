import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController.js';

const router = Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);

export default router;
