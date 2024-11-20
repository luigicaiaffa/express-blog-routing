// # Configurazione
const express = require("express");
const router = express.Router();

// # Array di post
const posts = require("../db/postslist.js");

// # Rotte
// index
router.get("/", (req, res) => {
  res.json("Lista dei post");
  // res.json(posts);
});

// show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Visualizza post con id ${id}`);
});

// create

// update

// modify

// delete

module.exports = router;
