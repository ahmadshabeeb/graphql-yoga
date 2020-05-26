export const Post = {
  author(parent, args, { db: { users } }) {
    return users.find((user) => user.id === parent.author);
  },

  comments(parent, args, { db: { comments } }) {
    return comments.filter((comment) => comment.post === parent.id);
  },
};
