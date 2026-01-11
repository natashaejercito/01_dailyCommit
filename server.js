const express = require("express");
const app = express();
const booksRead = require("./books.json");

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ message: `Updating this file in progress` });
});

app.get("/books", (req, res) => {
  res.send({ booksRead });
});

app.listen(HTTP_PORT, () => {
  console.log(`server is running in: http://localhost:${HTTP_PORT}`);
});
