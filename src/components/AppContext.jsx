import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <AppContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </AppContext.Provider>
  );
};
