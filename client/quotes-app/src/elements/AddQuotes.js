import React, { useState } from 'react';
import { addQuote} from '../quotesApi';

function AddQuote() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!text.trim() || !author.trim()) {
      alert('Please enter both quote and author.');
      return;
    }

    try {
      const response = await addQuote(text, author);
      console.log('Quote added successfully:', response);
      setText('');
      setAuthor('');
      setMessage('Quote added successfully');
    } catch (error) {
      console.error('Error adding quote:', error);
      setMessage('Error adding quote');
    }
  };

  return (
    <div>
      <h1>Add Quote</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quote Text:</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Add Quote</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddQuote;
