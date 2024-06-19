const quoteService = require("../services/quoteService");

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
  
  const getRandomQuote = (req, res) => {
    const randomquote = quoteService.geRandomQuote();
    res.send("Get a random existing quote");
  };

  const addQuote = (req, res) => {
    const { text, author } = req.body;
    if (!text || !author) {
        res.status(400).send({ status: "FAILED", data: { error: "Both 'text' and 'author' are required." } });
        return;
      }
      const newQuote = { text, author };
      try {
        const createdQuote = quoteService.addQuote(newQuote);
        res.status(201).send({ status: "OK", data: createdQuote });
      } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
      }
  };
  
  const updateQuote = (req, res) => {
    const updatedQuote = quoteService.updateQuote();
    res.send("Update an existing quote");
  };
  
  const deleteQuote = (req, res) => {
    const deletedQuote = quoteService.deleteQuote();
    res.send("Delete an existing quote");
  };
  
  module.exports = {
    getAllQuotes,
    getQuoteById,
    getRandomQuote,
    addQuote,
    updateQuote,
    deleteQuote,
  };