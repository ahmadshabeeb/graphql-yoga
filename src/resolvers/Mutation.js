import uuidv4 from "uuid/v4";

export const Mutation = {
  createUser(parent, args, { db: { users } }, info) {
    const emailTaken = users.some((user) => user.email === args.data.email);

    if (emailTaken) {
      throw new Error("Email taken");
    }

    const user = {
      id: uuidv4(),
      ...args.data,
    };

    users.push(user);

    return user;
  },

  deleteUser(parent, args, { db: { users, posts, comments } }, info) {
    const userIndex = users.findIndex((user) => user.id === args.id);

    if (userIndex === -1) {
      throw new Error("User not found");
    }

    const deletedUsers = users.splice(userIndex, 1);

    posts = posts.filter((post) => {
      const match = post.author === args.id;
      if (match) {
        comments.filter((comment) => comment.post !== post.id);
      }

      return !match;
    });

    comments = comments.filter((comment) => comment.author !== args.id);

    return deletedUsers[0];
  },

  createPost(parent, args, { db: { users, posts } }, info) {
    const userExist = users.some((user) => user.id == args.data.author);

    if (!userExist) {
      throw new Error("User not found");
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    posts.push(post);

    return post;
  },

  deletePost(parent, args, { db: { posts, comments } }, info) {
    const postIndex = posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) {
      throw new Error("Post not found");
    }

    const deletedPosts = posts.splice(postIndex, 1);

    comments = comments.filter((comment) => comment.post !== args.id);

    return deletedPosts[0];
  },

  createComment(parent, args, { db: { users, posts, comments } }, info) {
    const userExists = users.some((user) => user.id === args.data.author);
    if (!userExists) {
      throw new Error("User not found");
    }

    const postExists = posts.some(
      (post) => post.id === args.data.post && post.published
    );
    if (!postExists) {
      throw new Error("Post not found");
    }

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    comments.push(comment);
    return comment;
  },

  deleteComment(parent, args, { db: { comments } }, info) {
    const commentIndex = comments.findIndex(
      (comment) => comment.id === args.id
    );
    if (commentIndex === -1) {
      throw new Error("Comment not found ");
    }
    const deletedComments = comments.splice(commentIndex, 1);
    return deletedComments[0];
  },
};
