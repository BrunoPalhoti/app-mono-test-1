import { Router } from 'express'
import { getPosts } from '../../controllers/posts/get/get-posts.js'
import { createPost } from '../../controllers/posts/post/create_post.js'
import { likePost } from '../../controllers/posts/post/like-post.js'

const router = Router()

router.get('/', getPosts)
router.post('/', createPost)
router.post('/:id/like', likePost)

export default router
