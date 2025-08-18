const users = [
  { id: '1', name: 'Bruno', email: 'bruno@email.com', age: 32, profileType: 'user' },
  { id: '2', name: 'Alice', email: 'alice@email.com', age: 28, profileType: 'admin' },
  { id: '3', name: 'Carla', email: 'carla@email.com', age: 25, profileType: 'moderator' }
]

let nextId = users.length + 1

export const mockGetUsers = (newUser) => {
  if (newUser && typeof newUser === 'object') {
    let id
    if (newUser.id != null) {
      id = String(newUser.id)

      const parsed = parseInt(newUser.id, 10)
      if (!Number.isNaN(parsed) && parsed >= nextId) nextId = parsed + 1
    } else {
      id = String(nextId++)
    }

    const userToAdd = { id, ...newUser }
    users.push(userToAdd)
  }

  return users
}
