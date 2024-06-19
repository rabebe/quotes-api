const getAllQuotes = (req, res) => {
    res.send("Get all quotes");
  };
  
  const getOneQuote = (req, res) => {
    res.send("Get an existing quote by Id");
  };
  
  const getRandomQuote = (req, res) => {
    res.send("Get a random existing quote");
  };

  const createNewQuote = (req, res) => {
    res.send("Create a new quote");
  };
  
  const updateOneQuote = (req, res) => {
    res.send("Update an existing quote");
  };
  
  const deleteOneQuote = (req, res) => {
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