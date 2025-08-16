import { mockGetUsers } from '../../../mock/mock-get-user.js'

export const deleteUser = (req, res) => {
  const { id } = req.params

  const users = mockGetUsers()
  const userIndex = users.findIndex((u) => u.id === String(id))

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  users.splice(userIndex, 1)
  return res.status(200).json({ message: 'User deleted successfully' })
}
