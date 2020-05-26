export const User = {
  posts(parent, args, { db: { posts } }) {
    return posts.filter((post) => post.author === parent.id);
  },

  comments(parent, args, { db: { comments } }) {
    return comments.filter((comment) => comment.author === parent.id);
  },
};
