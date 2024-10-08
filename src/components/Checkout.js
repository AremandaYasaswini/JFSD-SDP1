// src/Checkout.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOrder } from './OrderContext';
import '../css/checkout.css';

const Checkout = () => {
  const { placeOrder } = useOrder();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const placeholderImage = 'https://via.placeholder.com/150';

  const [details, setDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    quantity: 1,
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = { ...details, product };
    placeOrder(orderDetails);
    navigate('/order-summary', { state: { orderDetails } }); // Redirect to Order Summary
  };

  if (!product) {
    return <div>Error: Product not found.</div>;
  }

  const formattedPrice = typeof product.price === 'string' ? product.price : 'N/A';

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="product-details">
        <img
          src={product.image || placeholderImage}
          alt={product.name || 'Product Image'}
          className="product-image"
        />
        <h2>{product.name || 'Product Name'}</h2>
        <p>Price: {formattedPrice}</p>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          min="1"
          value={details.quantity}
          onChange={handleChange}
        />
        <select name="paymentMethod" onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default Checkout;
