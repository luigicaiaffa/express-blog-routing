// # Configurazione
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// # Array di post
const path = require("path");
const postsPath = path.join(__dirname, "db", "postslist");
const posts = require(postsPath);

// # Rotte
app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`"Server del mio blog" listening on port ${port}`);
});
