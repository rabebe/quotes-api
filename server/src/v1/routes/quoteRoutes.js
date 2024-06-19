const express = require("express");
const { getAllQuotes, addQuote, getQuoteById } = require("../../controllers/quoteController");

const router = express.Router();

router.get("/", getAllQuotes);

router.get("/random", (req, res) => {
    res.send("Get a random quote");
  });

router.get("/:quoteId", getQuoteById);

router.post("/add", addQuote);

router.patch("/:quoteId", (req, res) => {
  res.send("Update an existing quote");
});

router.delete("/:quoteId", (req, res) => {
  res.send("Delete an existing quote");
});

module.exports = router;