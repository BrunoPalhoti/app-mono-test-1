import { Router } from 'express'
import { getPosts } from '../../controllers/posts/get/get-posts.js'
import { createPost } from '../../controllers/posts/post/create_post.js'
import { likePost } from '../../controllers/posts/post/like-post.js'
import { authenticate } from '../../auth/authenticate.js'

const router = Router()
/**
 * @swagger
 * /posts/:
 *   get:
 *     summary: Lista todos os posts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de posts
 */

router.get('/', authenticate, getPosts)

/**
 * @swagger
 * /posts/createPost/{userId}:
 *   post:
 *     summary: Criar um post
 *     parameters:
 *       - in: path
 *         name: userId
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
 *               title:
 *                 type: string
 *                 description: Título do post
 *               content:
 *                 type: string
 *                 description: Conteúdo do post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 */
router.post('/createPost/:userId?', authenticate, createPost)

/**
 * @swagger
 * /posts/{id}/like:
 *   post:
 *     summary: Dar like em um post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID do usuário que está dando like
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post curtido com sucesso
 */
router.post('/:id/like', authenticate, likePost)

export default router
