const Quote = require("../database/Quote");

const getAllQuotes = (filterParams) => {
  try {
    const allQuotes = Quote.getAllQuotes(filterParams);
    return allQuotes;
  } catch (error) {
    throw error;
  }
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