const quoteService = require("../services/quoteService");

// Handler for getting all quotes
const getAllQuotes = (req, res) => {
  const { text, author } = req.query;
  try {
    const allQuotes = quoteService.getAllQuotes({ text, author });
    res.send({ status: "OK", data: allQuotes });
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Handler for getting a single quote by its ID
const getQuoteById = (req, res) => {
  const { quoteId } = req.params;
  try {
      const quote = quoteService.getQuoteById(quoteId);
      if (!quote) {
          return res.status(404).json({ status: "error", message: 'Quote not found' });
      }
      res.status(200).json({ status: "success", data: quote });
  } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
  }
};

// Handler for adding a new quote
const addQuote = (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
      res.status(400).send({ status: "FAILED", data: { error: "Both 'text' and 'author' are required." } });
      return;
    }
    const newQuote = { text, author };
    try {
      const addedQuote = quoteService.addQuote(newQuote);
      res.status(201).send({ status: "OK", data: addedQuote });
    } catch (error) {
      res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

// Handler for updating an existing quote by its ID
const updateQuoteById = (req, res) => {
  const { quoteId } = req.params;
  const changes = req.body;
  if (!quoteId) {
    res.status(400).send({ status: "FAILED", data: { error: "Parameter ':quoteId' cannot be empty" } });
    return;
  }
  try {
    const updatedQuote = quoteService.updateQuoteById(quoteId, changes);
    res.send({ status: "OK", data: updatedQuote });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Handler for deleting a quote by its ID
const deleteQuoteById = (req, res) => {
  const { quoteId } = req.params;
  const changes = req.body;
  if (!quoteId) {
    res.status(400).send({ status: "FAILED", data: { error: "Parameter ':quoteId' cannot be empty" } });
    return;
  }
  try {
    const deletedQuote = quoteService.deleteQuoteById(quoteId);
    res.send({ status: "OK", data: deletedQuote });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Handler for getting a random quote
const getRandomQuote = (req, res) => {
  try {
    const randomQuote = quoteService.getRandomQuote();
    res.send({ status: "OK", data: randomQuote });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
  
  module.exports = {
    getAllQuotes,
    getQuoteById,
    addQuote,
    updateQuoteById,
    deleteQuoteById,
    getRandomQuote,
  };