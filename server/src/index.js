const express = require("express"); 
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1QuoteRouter = require("./v1/routes/quoteRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const cache = apicache.middleware;
const PORT = process.env.PORT || 5500; 

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/quotes", v1QuoteRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});