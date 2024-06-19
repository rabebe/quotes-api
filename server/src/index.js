const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1QuoteRouter = require("./v1/routes/quoteRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const cache = apicache.middleware;
const PORT = process.env.PORT || 5500; 

const corsOptions = {
     origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/quotes", v1QuoteRouter);
app.use(cors(corsOptions)); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});