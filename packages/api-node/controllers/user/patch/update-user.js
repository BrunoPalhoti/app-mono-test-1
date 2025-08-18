import pool from '../../../models/db.js'

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, age, profileType } = req.body

  try {
    const result = await pool.query(
      `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        age = COALESCE($3, age),
        profile_type = COALESCE($4, profile_type)
      WHERE id = $5
      RETURNING *`,
      [name, email, age, profileType, id]
    )

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ message: 'User updated successfully', user: result.rows[0] })
  } catch (error) {
    console.log('Error updating user:', error)
    return res.status(500).json({ error: 'Erro ao atualizar usuário' })
  }
}
