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
  
  const getOneQuote = (req, res) => {
    const quotebyId = quoteService.getOneQuote();
    res.send("Get an existing quote by Id");
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
    getOneQuote,
    getRandomQuote,
    addQuote,
    updateQuote,
    deleteQuote,
  };