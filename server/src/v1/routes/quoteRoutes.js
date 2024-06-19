const express = require("express");
const { getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById, getRandomQuote } = require("../../controllers/quoteController");

const router = express.Router();


router.get("/all", getAllQuotes);

router.get("/random", getRandomQuote);

router.get("/:quoteId", getQuoteById);

router.post("/add", addQuote);

router.patch("/:quoteId", updateQuoteById);

router.delete("/:quoteId", deleteQuoteById);



module.exports = router;