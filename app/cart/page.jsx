"use client";
import { useState } from 'react';
import styles from '@/app/styles/Cart.module.css';

const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Product 1',
      image: 'https://placehold.co/400',
      price: 19.99,
      quantity: 2,
      ratings: 4.5,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://placehold.co/400',
      price: 9.99,
      quantity: 1,
      ratings: 3.8,
    },
    // Add more cart items as needed
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
     <div className={styles.cartPage}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className={styles.productInfo}>
                      <img src={item.image} alt={item.title} className={styles.productImage} />
                      <div className={styles.productDetails}>
                        <h3>{item.title}</h3>
                        <p>Ratings: {item.ratings}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.cartSummary}>
            <div>
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default page;
