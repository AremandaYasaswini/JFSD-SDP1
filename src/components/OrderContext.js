// src/OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (orderDetails) => {
    const newOrder = { id: Date.now(), ...orderDetails }; // Generate a unique ID
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Add new order to the list
  };

  const cancelOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId)); // Remove order by ID
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
