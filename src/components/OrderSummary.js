// src/OrderSummary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrder } from './OrderContext'; // Assuming you have a context for order management


const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails } = location.state || {};
  const { placeOrder } = useOrder(); // Function to handle order placement

  if (!orderDetails) {
    return <div>Error: No order details found.</div>;
  }

  const handleConfirmOrder = () => {
    const confirm = window.confirm("Are you sure you want to confirm the order?");
    if (confirm) {
      // Call the function to place the order (you can modify this to fit your logic)
      placeOrder(orderDetails);
      alert("Order confirmed! Thank you for your purchase."); // Notify the user
      navigate('/orders'); // Redirect to orders after confirming the order
    }
  };

  return (
    <div className="order-summary-container">
      <h1>Order Summary</h1>
      <div className="order-details">
        <h2>Product Details</h2>
        <p><strong>Product Name:</strong> {orderDetails.product.name}</p>
        <p><strong>Price:</strong> {orderDetails.product.price}</p>
        <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
      </div>
      <div className="customer-details">
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> {orderDetails.name}</p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
        <p><strong>Phone:</strong> {orderDetails.phone}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
      </div>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default OrderSummary;
