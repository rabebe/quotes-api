import React, { useState } from 'react';
import { getRandomQuote } from '../quotesApi';

function RandomQuote() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = () => {
    getRandomQuote()
      .then(response => {
        setQuote(response.data);
      })
      .catch(error => {
        console.error('Error fetching random quote:', error);
    });
};

  return (
    <div>
      <h1>Random Quote</h1>
      <button onClick={fetchRandomQuote}>Get Random Quote</button>
      {quote && (
        <div>
          <p>{quote.text}</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
}

export default RandomQuote;
