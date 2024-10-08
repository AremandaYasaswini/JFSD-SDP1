import React from 'react';
import { useOrder } from './OrderContext'; // Assuming you have a context for order management
import { useNavigate } from 'react-router-dom';
import '../css/orders.css';

const Orders = () => {
  const { orders, cancelOrder } = useOrder(); // Fetch orders and cancelOrder function from context
  const navigate = useNavigate();

  // Filter out duplicate orders based on order ID
  const uniqueOrders = [...new Map(orders.map(order => [order.id, order])).values()];

  const handleCancelOrder = (orderId) => {
    const confirm = window.confirm("Are you sure you want to cancel this order?");
    if (confirm) {
      cancelOrder(orderId); // Call the function to cancel the order
      alert("Order has been canceled.");
    }
  };

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {uniqueOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        uniqueOrders.map((order) => (
          <div key={order.id} className="order-item">
            <h2>Order ID: {order.id}</h2>
            <p><strong>Name:</strong> {order.customerName || 'Not provided'}</p> {/* Ensure name is being populated */}
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone:</strong> {order.phone}</p> {/* Display phone number */}
            <p><strong>Email:</strong> {order.email}</p> {/* Display email */}
            <p><strong>Product:</strong> {order.product.name}</p>
            <p><strong>Price:</strong> ₹{order.product.price}</p>
            <p><strong>Quantity:</strong> {order.product.quantity}</p> {/* Display quantity */}
            <button onClick={() => handleCancelOrder(order.id)}>Cancel Order</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
