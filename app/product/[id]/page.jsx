"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext  } from "react";
import { CartContext } from "@/app/CartContext";
import styles from "@/app/styles/product.module.css";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Skeleton component
const Skeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonContent}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonRatings}></div>
      <div className={styles.skeletonPrice}></div>
      <div className={styles.skeletonColors}></div>
      <div className={styles.skeletonDescription}></div>
      <div className={styles.skeletonOther}></div>
      <div className={styles.skeletonButtons}></div>
      <div className={styles.skeletonRatings}></div>
      <div className={styles.skeletonPrice}></div>
      <div className={styles.skeletonColors}></div>
      <div className={styles.skeletonDescription}></div>
      <div className={styles.skeletonOther}></div>
      <div className={styles.skeletonButtons}></div>
      <div className={styles.skeletonRatings}></div>
      <div className={styles.skeletonPrice}></div>
      <div className={styles.skeletonColors}></div>
      <div className={styles.skeletonDescription}></div>
      <div className={styles.skeletonOther}></div>
      <div className={styles.skeletonButtons}></div>
    </div>
  </div>
);

export default function ProductPage({ params }) {
  const [productData, setProductData] = useState(null); // Use null as initial state
  const router = useRouter()
  const { id } = params;
  const { addToCart } = useContext(CartContext);


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

  // Event handler for Add To Cart button
  const handleAddToCart = () => {
   
    //Add Logic here.
    addToCart(productData);
    const notify = () => toast("Successfully Added Your Product To Cart!");
    notify();
  };

  const handleAddToWishList = () => {
    // Save the product ID in the local storage
    localStorage.setItem("WishList", id);
    const notify = () => toast("Successfully Added Your Product To Wishlist!");
    notify();
  };

  return (
    <>
      <div className={styles.productpage}>
        <div className={styles.leftProduct}>
          {productData ? (
            <Image
              src={image}
              alt="Product Image"
              width={500}
              height={0}
              style={{ width: "auto", height: "400px", margin: "0 auto" }}
              objectFit="contain"
            />
          ) : (
            <div className={styles.skeletonImage}></div>
          )}
        </div>
        <div className={styles.rightProduct}>
          {productData ? (
            <>
              <h1>{title}</h1>
              <div className={styles.ratings}>
                {Array.from({ length: Math.floor(ratings) }).map(
                  (_, i) => (
                    <AiFillStar key={i} />
                  )
                )}{" "}
                ({ratings})
              </div>
              <h3>
                ${price} <span className={styles.cutprice}>${cutPrice}</span>
              </h3>
              <div className={styles.colors}>
                <span className={styles.black}></span>
                <span className={styles.blue}></span>
                <span className={styles.red}></span>
              </div>
              <p>{description}</p>
              <div className={styles.other}>
                <span>Gender: {gender}</span>
                <GoDotFill />
                <span>Category: {category}</span>
                <GoDotFill />
                <span>Size: {size}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button onClick={handleAddToCart}>Add To Cart</button>
                <div className={styles.icoheart} onClick={handleAddToWishList}>
                  <BiHeart />
                </div>
              </div>
            </>
          ) : (
            <Skeleton /> // Render the Skeleton component while data is being loaded
          )}
        </div>
      </div>
      
    </>
  );
}
