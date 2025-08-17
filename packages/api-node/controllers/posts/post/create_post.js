import { mockGetPosts } from '../../../mock/mock-posts.js'

export const createPost = (req, res) => {
  const { title, content } = req.body
  if (!title && !content) {
    return res.status(400).json({ message: 'title or content is required' })
  }

  const posts = mockGetPosts({ title, content })
  const created = posts[0]
  return res.status(201).json(created)
}
