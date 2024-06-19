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

  const createNewQuote = (req, res) => {
    const createdQuote = quoteService.createNewQuote();
    res.send("Create a new quote");
  };
  
  const updateOneQuote = (req, res) => {
    const updatedQuote = quoteService.updateOneQuote();
    res.send("Update an existing quote");
  };
  
  const deleteOneQuote = (req, res) => {
    const deletedQuote = quoteService.deleteOneQuote();
    res.send("Delete an existing quote");
  };
  
  module.exports = {
    getAllQuotes,
    getOneQuote,
    getRandomQuote,
    createNewQuote,
    updateOneQuote,
    deleteOneQuote,
  };