// import { mockGetUsers } from '../../mock/mock-get-user.js'

// export const createUser = (req, res) => {
//   // historic placeholder: real create handled in controllers/user/post/create-user.js
//   return res.status(400).json({ message: 'Use POST /users to create a user' })
// }

// export const updateUser = (req, res) => {
//   const { id } = req.params
//   const updated = mockUpdateUser(id, req.body)
//   if (!updated) return res.status(404).json({ message: 'User not found' })
//   return res.json(updated)
// }

// export const deleteUser = (req, res) => {
//   const { id } = req.params
//   const deleted = mockDeleteUser(id)
//   if (!deleted) return res.status(404).json({ message: 'User not found' })
//   return res.json({ message: 'User deleted', user: deleted })
// }

// export const getUsers = (req, res) => {
//   return res.json(mockGetUsers())
// }
