"use client";
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import styles from '@/app/styles/Cart.module.css';

const Page = () => {
  const { cart, removeFromCart, clearCart, updateCartQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
      updateCartQuantity(productId, product.quantity - 1);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    updateCartQuantity(productId, product.quantity + 1);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  };

  return (
    <div className={styles.cartpage}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                  </td>
                  <td>{product.title}</td>
                  <td>₹ {product.price}</td>
                  <td>
                    <div className={styles.quantity}>
                      <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                    </div>
                  </td>
                  <td>₹ {product.price * product.quantity}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {cart.length > 0 && (
        <div className={styles.cartActions}>
          <div>
            <button onClick={handleClearCart} className={styles.clearCartButton}>Clear Cart</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            <span>Sub Total: ₹ {calculateSubtotal()}</span>
            <button className={styles.checkBTN}>Procced To Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

