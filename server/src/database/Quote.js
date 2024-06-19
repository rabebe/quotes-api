const DB = require("./db.json");
const { saveToDatabase } = require("./utils")

const getAllQuotes = (filterParams) => {
    try {
        let quotes = DB.quotes;
        if (filterParams.text) {
          quotes = quotes.filter((quote) => 
            quote.text.toLowerCase().includes(filterParams.text.toLowerCase())
          );
        }
        if (filterParams.author) {
          quotes = quotes.filter((quote) => 
            quote.author.toLowerCase().includes(filterParams.author.toLowerCase())
          );
        }
        return quotes;
      } catch (error) {
        throw { status: 500, message: error };
      }
};

const addQuote = (newQuote) => {
    try {
        const isAlreadyAdded =
            DB.quotes.findIndex((quote) => quote.text === newQuote.text) !== -1;
        if (isAlreadyAdded) {
            throw { 
              status: 400, 
              message: `Quote already exists` };
        }
        DB.quotes.push(newQuote);
        saveToDatabase(DB);
        return newQuote;
        } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const getQuoteById = (quoteId) => {
    try {
        const quote = DB.quotes.find((quote) => quote.id === quoteId);
        if (!quote) {
          throw { 
            status: 400, 
            message: `Can't find quote with the id '${quoteId}'` };
        }
        return quote;
        } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateQuoteById = (quoteId, changes) => {
    try {
      const indexForUpdate = DB.quotes.findIndex((quote) => quote.id === quoteId);
      if (indexForUpdate === -1) {
        throw { 
          status: 400, 
          message: `Can't find quote with the id '${quoteId}'` };
      }
      const updatedQuote = {
        ...DB.quotes[indexForUpdate],
        ...changes,
      };
      DB.quotes[indexForUpdate] = updatedQuote;
      saveToDatabase(DB);
      return updatedQuote;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

  const deleteQuoteById = (quoteId) => {
    try {
      const indexForDeletion = DB.quotes.findIndex((quote) => quote.id === quoteId);
      if (indexForDeletion === -1) {
        throw { 
          status: 400, 
          message: `Can't find quote with the id '${quoteId}'` };
      }
      DB.quotes.splice(indexForDeletion, 1);
      saveToDatabase(DB);
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

  const getRandomQuote = () => {
    try {
      const randomIndex = Math.floor(Math.random() * DB.quotes.length);
      return DB.quotes[randomIndex];
    } catch (error) {
      throw { status: 500, message: error };
    }
  };

module.exports = { 
    getAllQuotes,
    addQuote,
    getQuoteById,
    updateQuoteById,
    deleteQuoteById,
    getRandomQuote,
 };