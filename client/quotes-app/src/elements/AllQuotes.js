import React, { useEffect, useState } from 'react';
import { getAllQuotes } from '../quotesApi';

function AllQuotes() {
    const [quotes, setQuotes] = useState([]);
  
    useEffect(() => {
      getAllQuotes()
        .then(response => {
          setQuotes(response.data);
        })
        .catch(error => {
          console.error('Error fetching quotes:', error);
        });
    }, []);
  
    return (
     <div>
      <h1>All Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <p>{quote.text}</p>
            <p>- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllQuotes;
