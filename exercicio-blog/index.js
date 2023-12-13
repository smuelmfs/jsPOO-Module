const Author = require("./Author");

const samuel = new Author("Samuel");

const post = samuel.writePost("título", "lorem ipsum dolor sit amet");

post.addComment("Mauricio", "ótimo post!");
post.addComment("Jane", "péssimo post!");

console.log(samuel);
console.log(post);