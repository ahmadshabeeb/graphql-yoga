export const Comment = {
  author(parent, args, { db: { users } }) {
    return users.find((user) => user.id === parent.author);
  },

  post(parent, args, { db: { posts } }) {
    return posts.find((post) => post.id === parent.post);
  },
};
