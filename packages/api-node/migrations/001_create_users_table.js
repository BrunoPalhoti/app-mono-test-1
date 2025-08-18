export const up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    name: { type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(100)', notNull: true, unique: true },
    age: { type: 'integer' },
    profile_type: { type: 'varchar(20)', notNull: true }
  })

  pgm.sql(`
    INSERT INTO users (name, email, age, profile_type) VALUES
      ('Bruno', 'bruno@email.com', 32, 'user'),
      ('Alice', 'alice@email.com', 28, 'admin'),
      ('Carla', 'carla@email.com', 25, 'moderator');
  `)
}

export const down = (pgm) => {
  pgm.dropTable('users')
}
