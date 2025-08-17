export const mockGetPosts = (newPost) => {
  const posts = (mockGetPosts._posts ||= [
    { id: '1', text: 'Hello world', likes: 0 },
    { id: '2', text: 'Second post', likes: 2 }
  ])

  mockGetPosts._nextId ||= posts.length + 1

  if (newPost && typeof newPost === 'object') {
    let id
    if (newPost.id != null) {
      id = String(newPost.id)
      const parsed = parseInt(newPost.id, 10)
      if (!Number.isNaN(parsed) && parsed >= mockGetPosts._nextId) mockGetPosts._nextId = parsed + 1
    } else {
      id = String(mockGetPosts._nextId++)
    }

    const postToAdd = { id, likes: 0, createdAt: new Date().toISOString(), ...newPost }
    posts.unshift(postToAdd)
  }

  return posts
}
