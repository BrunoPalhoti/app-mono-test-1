export const up = (pgm) => {
  pgm.addColumn('users', {
    active: {
      type: 'boolean',
      notNull: true,
      default: true
    }
  })
}

export const down = (pgm) => {
  pgm.dropColumn('users', 'active')
}
