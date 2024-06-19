import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { deleteQuoteById } from '../quotesApi';

function DeleteQuote() {
    const [quoteId, setQuoteId] = useState('');
    const [message, setMessage] = useState('');
  
    const handleDelete = async () => {
      if (!quoteId) {
        setMessage('Please enter a quote ID');
        return;
      }
  
      try {
        const response = await deleteQuoteById(quoteId);
        console.log('Quote deleted successfully:', response.data);
        setMessage('Quote deleted successfully');
      } catch (error) {
        console.error('Error deleting quote:', error);
        setMessage('Error deleting quote');
      }
    };
  
    return (
      <div>
        <h1>Delete Quote</h1>
        <input 
          type="text" 
          placeholder="Enter quote ID" 
          value={quoteId} 
          onChange={(e) => setQuoteId(e.target.value)} 
        />
        <button onClick={handleDelete}>Delete Quote</button>
        {message && <p>{message}</p>}
      </div>
    );
  }

export default DeleteQuote;
