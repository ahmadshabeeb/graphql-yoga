export const Query = {
  posts(_, args, { db: { posts } }, info) {
    if (args.isPublished) {
      return posts.filter((post) => post.published);
    }

    if (args.isPublished === false) {
      return posts.filter((post) => !post.published);
    }

    if (args.query) {
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    }
    return posts;
  },

  users(_, args, { db: { users } }) {
    if (args.query) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(args.query.toLowerCase())
      );
    }
    return users;
  },

  comments(parent, args, { db: { comments } }) {
    return comments;
  },
};
