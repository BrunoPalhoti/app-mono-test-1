export const up = (pgm) => {
  pgm.createTable('post_likes', {
    id: 'id',
    user_id: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'CASCADE'
    },
    post_id: {
      type: 'integer',
      notNull: true,
      references: '"posts"',
      onDelete: 'CASCADE'
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
  pgm.addConstraint('post_likes', 'unique_user_post_like', {
    unique: ['user_id', 'post_id']
  })
}

export const down = (pgm) => {
  pgm.dropTable('post_likes')
}
