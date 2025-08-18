import { mockGetUsers } from '../../../mock/mock-get-user.js'

export const getUsers = (req, res) => {
  return res.json(mockGetUsers())
}
