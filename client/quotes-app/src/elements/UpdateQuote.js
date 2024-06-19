import React, { useState } from 'react';
import { getQuoteById, updateQuoteById } from '../quotesApi';

function UpdateQuote() {
  const [quoteId, setQuoteId] = useState('');
  const [quote, setQuote] = useState(null);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (!quoteId) {
      setMessage('Please enter a quote ID.');
      return;
    }

    try {
      const response = await getQuoteById(quoteId);
      console.log('Fetched quote:', response); // Debugging log
      setQuote(response);
      setText(response.text);
      setAuthor(response.author);
      setMessage('Quote fetched successfully.');
    } catch (error) {
      console.error('Error fetching quote:', error);
      setMessage('Error fetching quote. Please make sure the ID is correct.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging line

    if (!quoteId) {
      alert('Please search for a quote first.');
      return;
    }

    try {
      const response = await updateQuoteById(quoteId, { text, author });
      console.log('Quote updated successfully:', response);
      setMessage('Quote updated successfully.');
    } catch (error) {
      console.error('Error updating quote:', error);
      setMessage('Error updating quote.');
    }
  };

  return (
    <div>
      <h1>Update Quote</h1>
      <div>
        <input
          type="text"
          placeholder="Enter quote ID"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
        />
        <button onClick={handleSearch}>Search Quote</button>
      </div>

      {quote && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Quote Text:</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button type="submit">Update Quote</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateQuote;
