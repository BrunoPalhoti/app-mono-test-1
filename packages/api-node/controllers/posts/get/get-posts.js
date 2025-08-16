import { mockGetPosts } from '../../../mock/mock-posts.js'

export const getPosts = (req, res) => {
  const posts = mockGetPosts()
  return res.status(200).json(posts)
}
