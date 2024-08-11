import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const TransactionTokenContext = createContext();

export const TransactionTokenProvider = ({ children }) => {
  const [transactionToken, setTransactionToken] = useState(null);

  const fetchTransactionToken = async () => {
    try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';
        const response = await axios.get(`${apiUrl}/payment/get-token`);
      const { token } = response.data;
      setTransactionToken(token);
      return token;
    } catch (error) {
      console.error('Failed to fetch transaction token:', error);
      throw error;
    }
  };

  return (
    <TransactionTokenContext.Provider value={{ transactionToken, fetchTransactionToken }}>
      {children}
    </TransactionTokenContext.Provider>
  );
};

export const useTransactionToken = () => {
  return useContext(TransactionTokenContext);
};
