import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">

      <main>
        <h2>Welcome to the Quotes App</h2>
        <p>Explore our features:</p>
        <ul className="feature-list">
          <li><Link to="/all">All Quotes</Link> - View all available quotes.</li>
          <li><Link to="/random">Random Quote</Link> - Get a random quote.</li>
          <li><Link to="/add">Add Quote</Link> - Add a new quote to the collection.</li>
          <li><Link to="/update">Update Quote</Link> - Modify an existing quote.</li>
          <li><Link to="/delete">Delete Quote</Link> - Remove a quote from the collection.</li>
        </ul>
      </main>

      <footer>
        <p>&copy; 2024 Quotes App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
