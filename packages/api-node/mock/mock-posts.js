export const mockGetPosts = (newPost) => {
const posts = (mockGetPosts._posts ||= [
  {
    id: 1,
    user_id: 11,
    user: "Bruno Palhoti",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Primeiro post na timeline!",
    date: "2025-08-17 10:00",
    like: 0,

  }
,
  {

    id: 11,
    user_id: 11,
    user: "João Silva",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    content: "Primeiro post na timeline!",
    date: "2025-08-17 10:00",
    like: 0,
  },
  {
    id: 2,
    user_id: 2,
    user: "Maria Souza",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Curtindo muito esse app 😍",
    date: "2025-08-17 11:30",
    like: 0,
  },
  {
    id: 3,
    user_id: 3,
    user: "Carlos Lima",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content: "Alguém viu as novidades?",
    date: "2025-08-17 12:15",
    like: 0,
  },
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
