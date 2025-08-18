export const up = (pgm) => {
  pgm.addConstraint('users', 'users_email_unique', {
    unique: ['email']
  })
}

export const down = (pgm) => {
  pgm.dropConstraint('users', 'users_email_unique')
}
