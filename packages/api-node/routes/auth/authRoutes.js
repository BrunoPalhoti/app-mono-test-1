import { Router } from 'express'
import { login } from '../../controllers/auth/post/login.js'

const router = Router()

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza login do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login realizado com sucesso
 *                 email:
 *                   type: string
 *                   example: bruno@email.com
 *       400:
 *         description: E-mail e senha obrigatórios
 */
router.post('/login', login)

export default router
