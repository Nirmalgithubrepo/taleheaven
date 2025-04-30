import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [userBooks, setUserBooks] = useState([]);

  const addBook = (book) => {
    setUserBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <BookContext.Provider value={{ userBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
