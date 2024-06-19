import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AllQuotes from './elements/AllQuotes';
import RandomQuote from './elements/RandomQuote';
import AddQuote from './elements/AddQuote';
import UpdateQuote from './elements/UpdateQuote';
import DeleteQuote from './elements/DeleteQuote';
import LandingPage from './elements/LandingPage';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="feature-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all">All Quotes</Link>
              </li>
              <li>
                <Link to="/random">Random Quote</Link>
              </li>
              <li>
                <Link to="/add">Add Quote</Link>
              </li>
              <li>
                <Link to={`/:quoteId/update`}>Update Quote</Link>
              </li>
              <li>
                <Link to={`/:quoteId/delete`}>Delete Quote</Link>
              </li>
            </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/all' element={<AllQuotes />} />
          <Route path='/random' element={<RandomQuote />} />
          <Route path='/add' element={<AddQuote />} />
          <Route path='/:quoteId/update' element={<UpdateQuote />} />
          <Route path='/:quoteId/delete' element={<DeleteQuote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
