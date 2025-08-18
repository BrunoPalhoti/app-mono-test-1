import { Router } from 'express'
import { getUsers } from '../../controllers/user/get/get-user.js'
import { createUser } from '../../controllers/user/post/create-user.js'
import { updateUser } from '../../controllers/user/patch/update-user.js'
import { deleteUser } from '../../controllers/user/delete/delete-user.js'
import { authenticate } from '../../auth/authenticate.js'

const router = Router()

/**
 * @swagger
 * /users/getUsers:
 *   get:
 *     summary: Lista todos os usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   age:
 *                     type: integer
 *                   profileType:
 *                     type: string
 */
router.get('/getUsers', authenticate, getUsers)

/**
 * @swagger
 * /users/createUser:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *               age:
 *                 type: integer
 *                 description: Idade do usuário
 *               profileType:
 *                 type: string
 *                 description: Tipo de perfil (user, admin, moderator)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 profileType:
 *                   type: string
 */
router.post('/createUser', createUser)

/**
 * @swagger
 * /users/updateUser/{id}:
 *   patch:
 *     summary: Atualiza um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *               age:
 *                 type: integer
 *                 description: Idade do usuário
 *               profileType:
 *                 type: string
 *                 description: Tipo de perfil (user, admin, moderator)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 profileType:
 *                   type: string
 */
router.patch('/updateUser/:id', authenticate, updateUser)

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 */
router.delete('/deleteUser/:id', authenticate, deleteUser)

export default router
