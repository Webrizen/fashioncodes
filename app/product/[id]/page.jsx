"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/styles/product.module.css";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

export default function ProductPage({ params }) {
  const [ProductData, setProductData] = useState(0);
  const navigation = useRouter();
  const { id } = params;

  // Define the API URL
  const apiUrl = "http://localhost:3000/api";

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

  const { title, image, price, description, ratings, category, size, gender } =
    ProductData;

  return (
    <>
      <div className={styles.productpage}>
        <div className={styles.leftProduct}>
          <Image
            src={image}
            alt="Product Image"
            width={500}
            height={0}
            style={{ width: "auto", height: "400px", margin: "0 auto" }}
            objectFit="contain"
          />
        </div>
        <div className={styles.rightProduct}>
          <h1>{title}</h1>
          <div className={styles.ratings}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar /> ({ratings})
          </div>
          <h3>
            ${price} <span className={styles.cutprice}>$5000</span>
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <button>Add To Cart</button>
          <div className={styles.icoheart}>
            <BiHeart />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
