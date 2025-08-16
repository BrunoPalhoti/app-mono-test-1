let users = []

export const getUsers = (req, res) => res.json(users)

export const createUser = (req, res) => {
  users.push(req.body)
  res.status(201).json(req.body)
}
