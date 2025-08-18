import { mockGetUsers } from '../../../mock/mock-get-user.js'

export const createUser = (req, res) => {
  const data = req.body

  const users = mockGetUsers(data)
  const created = users[users.length - 1]

  return res.status(201).json({ created, users })
}
