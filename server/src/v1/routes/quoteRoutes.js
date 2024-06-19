const express = require("express");
const { getAllQuotes } = require("../../controllers/quoteController");

const router = express.Router();

router.get("/", getAllQuotes);

router.get("/random", (req, res) => {
    res.send("Get a random quote");
  });

router.get("/:workoutId", (req, res) => {
  res.send("Get quote by Id");
});

router.post("/", (req, res) => {
  res.send("Create a new quote");
});

router.patch("/:quoteId", (req, res) => {
  res.send("Update an existing quote");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing quote");
});

module.exports = router;