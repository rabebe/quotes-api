const Quote = require("../database/Quote");
const { v4: uuid } = require('uuid');


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
  
  const addQuote = (newQuote) => {
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    const quoteToInsert = {
        id: uuid(),
      ...newQuote,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    try {
      return Quote.addQuote(quoteToInsert);
    } catch (error) {
      throw error;
    }
  };
  
  const updateQuote = () => {
    return;
  };
  
  const deleteQuote = () => {
    return;
  };
  
  module.exports = {
    getAllQuotes,
    getOneQuote,
    getRandomQuote,
    addQuote,
    updateQuote,
    deleteQuote,
  };