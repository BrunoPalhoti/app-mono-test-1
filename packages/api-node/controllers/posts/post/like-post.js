import { mockGetPosts } from '../../../mock/mock-posts.js'

export const likePost = (req, res) => {
  const { id } = req.params;
  const userId = req.body?.userId || req.query?.userId || req.headers['x-user-id'];
  const posts = mockGetPosts();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  post.likes = (post.likes || 0) + 1;

  console.log(`Usuário que deu like: ${userId}`);
  return res.status(200).json({ id: post.id, likes: post.likes });
}
