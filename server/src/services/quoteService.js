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
  
const getQuoteById = (quoteId) => {
  try {
    return Quote.getQuoteById(quoteId);
  } catch (error) {
    throw error;
  }
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
  
const updateQuoteById = (quoteId, changes) => {
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" });
  const changesWithTimeStamp = {
    ...changes,
    updatedAt: timestamp
  };
    try {
      return Quote.updateQuoteById(quoteId, changesWithTimeStamp);
    } catch (error) {
      throw error;
    }
};
  
const deleteQuoteById = (quoteId) => {
  try {
    return Quote.deleteQuoteById(quoteId);
  } catch (error) {
    throw error;
  }
};

const getRandomQuote = () => {
  try {
    return Quote.getRandomQuote();
  } catch (error) {
    throw error;
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