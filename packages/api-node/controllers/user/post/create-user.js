import pool from '../../../models/db.js'

export const createUser = async (req, res) => {
  const { name, email, age, profileType } = req.body
  console.log('Creating user with data:', { name, email, age, profileType })
  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, age, profile_type)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, email, age, profileType]
    )
    return res.status(201).json({ message: 'User created successfully', user: result.rows[0] })
  } catch (error) {
    console.log('Error creating user:', error)
    return res.status(500).json({ error: 'Erro ao criar usuário' })
  }
}
