let users = [
  { id: '1', name: 'Alice', email: 'alice@email.com', age: 28 },
  { id: '2', name: 'Bruno', email: 'bruno@email.com', age: 32 },
  { id: '3', name: 'Carla', email: 'carla@email.com', age: 25 }
]

export const createUser = (req, res) => {
  users.push(req.body)
  res.status(201).json(req.body)
}

export const updateUser = (req, res) => {
  const { id } = req.params
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  users[userIndex] = { ...users[userIndex], ...req.body }
  res.json(users[userIndex])
}

export const deleteUser = (req, res) => {
  const { id } = req.params
  const userIndex = users.findIndex((user) => user.id === id)
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' })
  }
  const deletedUser = users.splice(userIndex, 1)
  res.json({ message: 'User deleted', user: deletedUser[0] })
}
