export const up = (pgm) => {
  pgm.createTable('posts', {
    id: 'id',
    user_id: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'CASCADE'
    },
    title: { type: 'varchar(200)', notNull: true },
    content: { type: 'text', notNull: true },
    likes: { type: 'integer', notNull: true, default: 0 },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') }
  })

  pgm.sql(`
    INSERT INTO posts (user_id, title, content, likes) VALUES
      (1, 'Primeiro post na timeline!', 'Primeiro post na timeline!', 0),
      (2, 'Curtindo muito esse app 😍', 'Curtindo muito esse app 😍', 0),
      (3, 'Alguém viu as novidades?', 'Alguém viu as novidades?', 0);
  `)
}

export const down = (pgm) => {
  pgm.dropTable('posts')
}
