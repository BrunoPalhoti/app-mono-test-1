import jwt from 'jsonwebtoken'

const authenticatedEmails = [];

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

function mockGetUsers() {
  return [
    {
      id: 1,
      email: 'bruno@gmail.com',
      name: 'Bruno',
      profileType: 'admin',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
    {
      id: 2,
      email: 'maria@gmail.com',
      name: 'Maria',
      profileType: 'user',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
    }
  ]
}

export const login = (req, res) => {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const users = mockGetUsers()
  const user = users.find((u) => u.email === email)

  if (!user || password !== 'password') {
    return res.status(401).json({ message: 'Invalid credentials' })
  }


  authenticatedEmails.push(user.email);

  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    profileType: user.profileType,
    avatar: user.avatar
  }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })

  const profile = {
    id: user.id,
    email: user.email,
    name: user.name,
    profileType: user.profileType,
    avatar: user.avatar
  }
  return res.json({ token, profile })
}

export { authenticatedEmails };
