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
  res.json(`Visualizza post con id: ${id}`);
});

// create
router.post("/", (req, res) => {
  res.json("Crea un nuovo post");
});

// update
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Modifica interamente il post con id: ${id}`);
});

// modify
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Modifica parzialmente il post con id: ${id}`);
});

// delete
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Elimina il post con id: ${id}`);
});

module.exports = router;
