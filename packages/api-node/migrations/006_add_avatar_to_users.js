export const up = (pgm) => {
  pgm.addColumn('users', {
    avatar: {
      type: 'varchar(255)',
      notNull: false
    }
  })
  pgm.sql(`
    UPDATE users SET avatar = 'https://randomuser.me/api/portraits/men/32.jpg' WHERE id = 1;
    UPDATE users SET avatar = 'https://randomuser.me/api/portraits/women/44.jpg' WHERE id = 2;
    UPDATE users SET avatar = 'https://randomuser.me/api/portraits/men/65.jpg' WHERE id = 3;
  `)
}

export const down = (pgm) => {
  pgm.dropColumn('users', 'avatar')
}
