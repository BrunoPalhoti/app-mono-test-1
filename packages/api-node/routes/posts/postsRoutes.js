import { Router } from 'express'
import { getPosts } from '../../controllers/posts/get/get-posts.js'
import { createPost } from '../../controllers/posts/post/create_post.js'
import { likePost } from '../../controllers/posts/post/like-post.js'
import { authenticate } from '../../auth/authenticate.js'

const router = Router()

router.get('/', authenticate, getPosts)
router.post('/', authenticate, createPost)
router.post('/:id/like', authenticate, likePost)

export default router
