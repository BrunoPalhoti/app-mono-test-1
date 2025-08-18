import { mockGetUsers } from '../../../mock/mock-get-user.js'

export const updateUser = (req, res) => {
  const { id } = req.params
  const { name, email, age, profileType } = req.body

  const users = mockGetUsers()
  const user = users.find((u) => u.id === String(id))

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  if (name != null) user.name = name
  if (email != null) user.email = email
  if (age != null) user.age = age
  if (profileType != null) user.profileType = profileType

  return res.status(200).json({ message: 'User updated successfully', user })
}
