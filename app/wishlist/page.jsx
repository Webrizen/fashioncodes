"use client";
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styles from "@/app/styles/WishList.module.css";

const page = () => {
  const { wishList, removeFromWishList, addToCart } = useContext(CartContext);

  const handleRemoveFromWishList = (productId) => {
    removeFromWishList(productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    handleRemoveFromWishList(product.id);
  };
  return (
    <>
      <div className={styles.wishListPage}>
      <h1>Wish List</h1>
      {wishList.length === 0 ? (
        <p>Your wish list is empty.</p>
      ) : (
        <table className={styles.wishListTable}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} className={styles.productImage} />
                </td>
                <td>{product.title}</td>
                <td>₹ {product.price}</td>
                <td style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 'min-content', gap: '10px' }}>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button onClick={() => handleRemoveFromWishList(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default page;
