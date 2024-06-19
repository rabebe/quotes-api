const express = require("express"); 
const v1QuoteRouter = require("./v1/routes/quoteRoutes");

const app = express(); 
const PORT = process.env.PORT || 5500; 

app.use("/api/v1/quotes", v1QuoteRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});