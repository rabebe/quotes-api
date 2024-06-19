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

module.exports = { getAllQuotes };