import React, { useState, useEffect, createContext } from 'react';

const DataContext = createContext(); // Create the context

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [InCart, setInCart] = useState(0)
  const API = "http://localhost:5000/card";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("error", response.status, response.statusText);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, cart, setCart, total, setTotal, InCart, setInCart }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };