export const up = (pgm) => {
  pgm.addColumn('users', {
    password: {
      type: 'varchar(255)',
      notNull: false
    }
  })

  pgm.sql("UPDATE users SET password = 'password' WHERE password IS NULL")

  pgm.alterColumn('users', 'password', { notNull: true })
}

export const down = (pgm) => {
  pgm.dropColumn('users', 'password')
}
