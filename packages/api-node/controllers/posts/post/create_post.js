import { mockGetPosts } from '../../../mock/mock-posts.js'

export const createPost = (req, res) => {
  const { title, content } = req.body
  const userId = req.params.userId || req.query.userId
  if (!title && !content) {
    return res.status(400).json({ message: 'title or content is required' })
  }

  if (!userId) {
    return res.status(400).json({ message: 'userId is required as query or param' })
  }

  const posts = mockGetPosts({ title, content, userId })
  const created = posts[0]
  return res.status(201).json(created)
}
