const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
const helmet = require("helmet");
const apicache = require("apicache");
const v1QuoteRouter = require("./v1/routes/quoteRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const PORT = process.env.PORT || 5500;

// Middleware to enhance API security
app.use(helmet());


// Configure CORS to allow requests from localhost:3000
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Middlware to cache responses for 2 minutes
app.use(apicache.middleware("2 minutes"));

// Define routes for version 1 of API
app.use("/api/v1/quotes", v1QuoteRouter);

// Start server and initialise documentation
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});