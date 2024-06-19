const Quote = require("../database/Quote");

const getAllQuotes = () => {
  const allQuotes = Quote.getAllQuotes();
    return allQuotes;
  };
  
  const getOneQuote = () => {
    return;
  };

  const getRandomQuote = () => {
    return;
  };
  
  const createNewQuote = () => {
    return;
  };
  
  const updateOneQuote = () => {
    return;
  };
  
  const deleteOneQuote = () => {
    return;
  };
  
  module.exports = {
    getAllQuotes,
    getOneQuote,
    getRandomQuote,
    createNewQuote,
    updateOneQuote,
    deleteOneQuote,
  };