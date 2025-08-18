import db from '../../../models/db.js'

export const deleteUser = async (req, res) => {
  console.log('deleteUser called')
  const { id } = req.params

  try {
    const result = await db.query('UPDATE users SET active = false WHERE id = $1 RETURNING *', [id])

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ message: 'User desativado com sucesso' })
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao desativar usuário', error })
  }
}
