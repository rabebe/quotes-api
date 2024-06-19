const express = require("express");
const { getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById, getRandomQuote } = require("../../controllers/quoteController");
const apicache = require("apicache");

const router = express.Router();
const cache = apicache.middleware;

router.get("/", cache("2 minutes"), getAllQuotes);

router.get("/random", getRandomQuote);

router.get("/:quoteId", getQuoteById);

router.post("/add", addQuote);

router.patch("/:quoteId", updateQuoteById);

router.delete("/:quoteId", deleteQuoteById);



module.exports = router;