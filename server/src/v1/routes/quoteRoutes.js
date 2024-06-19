const express = require("express");
const { getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById } = require("../../controllers/quoteController");

const router = express.Router();

router.get("/", getAllQuotes);

router.get("/random", (req, res) => {
    res.send("Get a random quote");
  });

router.get("/:quoteId", getQuoteById);

router.post("/add", addQuote);

router.patch("/:quoteId", updateQuoteById);

router.delete("/:quoteId", deleteQuoteById);

module.exports = router;