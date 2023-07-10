"use client";
import { useEffect, useState } from 'react';
import styles from '@/app/styles/Cart.module.css';

const page = () => {
  const [productData, setProductData] = useState(null); // Use null as initial state
  const id = localStorage.getItem('cartProductId');
  console.log(id);

  // Define the API URL
  const apiUrl = "/api";

  // Create a function to make the POST request
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Pass the ID as JSON in the request body
      });

      const data = await response.json();
      console.log(data); // Print the response data
      setProductData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const {
    title,
    image,
    price,
    description,
    ratings,
    category,
    size,
    gender,
    cutPrice,
  } = productData || {}; // Destructure the properties from productData or use an empty object

  return (
    <>
    <div className={styles.cartPage}>
      <h1>Cart</h1>
    </div>
    </>
  );
}

export default page;


