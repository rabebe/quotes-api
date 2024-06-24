# quotes-api

## Introduction
The Quotes API project is a full-stack application that allows users to manage a collection of quotes.
The backend is built with Node.js and Express, while the frontend is developed with React.
The application supports CRUD operations on quotes and includes features such as random quote retrieval and caching for performance improvement.

## Features
- Create, Read, Update, Delete (CRUD) quotes
- Retrieve a random quote
- Caching with apicache middleware
- Interactive frontend built with React
- RESTful API design

## Technologies
Backend: Node.js, Express, apicache, body-parser, helmet, cors, swagger
Frontend: React, Axios
Database: JSON file (for simplicity in this example)

## API Endpoints
- GET /api/v1/quotes/all - Get all quotes
- GET /api/v1/quotes/random - Get a random quote
- POST /api/v1/quotes/add - Add a new quote
- GET /api/v1/quotes/:quoteId - Get a quote by ID
- PATCH /api/v1/quotes/:quoteId - Update a quote by ID
- DELETE /api/v1/quotes/:quoteId - Delete a quote by ID

## Backend Setup

Navigate to the `server` directory

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start server

```bash
npm start
```

## Frontend dependencies

Navigate to the `client` directory

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start server

```bash
npm start
```

## License

This project is licensed under the MIT License.