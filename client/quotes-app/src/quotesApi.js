import axios from 'axios';

const API_BASE_URL = 'http://localhost:5500/api/v1/quotes';
// Adjust based on your backend server configuration

// Function to get all quotes
export const getAllQuotes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all quotes:', error);
    throw error;
  }
};
  
  // Function to get a random quote
export const getRandomQuote = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random quote:', error);
    throw error;
  }
};
  
  // Function to add a new quote
  export const addQuote = async (text, author) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/add`, { text, author });
      return response.data;
    } catch (error) {
      console.error('Error adding new quote:', error);
      throw error;
    }
  };
  
  // Function to get a quote by ID
  export const getQuoteById = async (quoteId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${quoteId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching quote with ID ${quoteId}:`, error);
      throw error;
    }
  };
  
  // Function to update a quote by ID
  export const updateQuoteById = async (quoteId, updatedQuote) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${quoteId}`, updatedQuote);
      return response.data;
    } catch (error) {
      console.error(`Error updating quote with ID ${quoteId}:`, error);
      throw error;
    }
  };
  
  // Function to delete a quote by ID
  export const deleteQuoteById = async (quoteId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${quoteId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting quote with ID ${quoteId}:`, error);
      throw error;
    }
  };
