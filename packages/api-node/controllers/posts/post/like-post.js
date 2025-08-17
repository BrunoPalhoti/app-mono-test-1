import { mockGetPosts } from '../../../mock/mock-posts.js'

export const likePost = (req, res) => {
  const { id } = req.params
  const posts = mockGetPosts()
  const post = posts.find((p) => p.id === String(id))

  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }

  post.likes = (post.likes || 0) + 1
  return res.status(200).json({ id: post.id, likes: post.likes })
}
