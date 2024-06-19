const DB = require("./db.json");

const getAllQuotes = () => {
  return DB.quotes;
};

module.exports = { getAllQuotes };