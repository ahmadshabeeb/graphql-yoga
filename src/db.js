const posts = [
  {
    id: "1",
    title: "Flight",
    body: "Drama Movie staring Denizel Washington",
    published: false,
    author: "1",
  },
  {
    id: "2",
    title: "Hangover",
    body: "Threee goffie friends get drunk in Las Vegas, and there is a tiger",
    published: true,
    author: "1",
  },
  {
    id: "3",
    title: "Wolf of Wallstreet",
    body: "How to make money illeaglly and convience people, that's fine",
    published: true,
    author: "2",
  },
];

const users = [
  {
    id: "1",
    name: "Ahmad",
    email: "ahmad@example.com",
  },
  {
    id: "2",
    name: "Sofia",
    email: "sofia@example.com",
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com",
  },
];

const comments = [
  {
    id: "1",
    text: "My first Comment",
    author: "2",
    post: "1",
  },
  {
    id: "2",
    text: "My second Comment",
    author: "2",
    post: "1",
  },
  {
    id: "3",
    text: "My third Comment",
    author: "3",
    post: "2",
  },
  {
    id: "4",
    text: "My fourth Comment",
    author: "1",
    post: "3",
  },
];

export const db = {
  users,
  posts,
  comments,
};
