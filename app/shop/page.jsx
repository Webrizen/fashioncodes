"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/shop.module.css";
import { BiHeart, BiSearch } from "react-icons/bi";
import { AiFillStar } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={styles.shop}>
        <div className={styles.leftShop}>
          <h4>Search</h4>
          <div className={styles.searchBox}>
            <input
              type="search"
              name="Search"
              id="Search"
              placeholder="Try Searching For Smartphones..."
            />
            <div className={styles.ico}>
              <BiSearch />
            </div>
          </div>
          <hr style={{ margin: "10px" }} />
          <h4>Filters</h4>
          <div className={styles.catagories}>
            <span>CATEGORIES</span>
            <select name="catagories" id="catagories">
              <option
                value="Clothing And Accessories"
                name="clothing-and-accessories"
                id="clothing-and-accessories"
              >
                Clothing And Accessories
              </option>
              <option value="Topwear" name="Topwear" id="Topwear">
                Topwear
              </option>
              <option value="T-shirts" name="T-shirts" id="T-shirts">
                T-shirts
              </option>
            </select>
            <span>GENDER</span>
            <select name="gender" id="gender">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
            <span>DISCOUNT</span>
            <select name="discount" id="discount">
              <option value="Not available">Not Available</option>
            </select>
            <span>SIZE</span>
            <select name="size" id="size">
              <option value="xxs">XXS</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="L">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="xxxl">XXXL</option>
              <option value="free">Free size</option>
            </select>
            <span>CUSTOMER RATINGS</span>
            <select name="ratings" id="ratings">
              <option value="5">5 Star Only</option>
              <option value="4+">4+ Star ratings</option>
              <option value="3+">3+ Star ratings</option>
            </select>
            <span>PRICE(MIN: 500 To MAX: 1000+)</span>
            <input type="range" name="price" id="price" min="0" max="100" />
          </div>
        </div>
        <div className={styles.rightShop}>
          {loading
            ? // Show advanced skeleton while data is being fetched
              Array.from({ length: 4 }).map((_, index) => (
                <div className={styles.cardSkeleton} key={index}>
                  <div className={styles.imageSkeleton}></div>
                  <div className={styles.contentSkeleton}>
                    <div className={styles.titleSkeleton}></div>
                    <div className={styles.priceSkeleton}></div>
                    <div className={styles.descriptionSkeleton}></div>
                  </div>
                </div>
              ))
            : // Render products once data is loaded
              products.map((product, index) => (
                <div className={styles.card} key={index}>
                  <Image
                    src={product.image}
                    alt="Product Image"
                    width={400}
                    height={600}
                    style={{ width: "auto", height: "400px", margin: "0 auto" }}
                    objectFit="contain"
                  />
                  <h4>{product.title}</h4>
                  <div>
                    <span>${product.price}</span>
                    {"  "}
                    {"  "}
                    <span className={styles.cutprice}>$5000</span>
                  </div>
                  <div className={styles.rating} style={{ color: 'gold' }}>
                    {Array.from({ length: Math.floor(product.ratings) }).map(
                      (_, i) => (
                        <AiFillStar key={i} />
                      )
                    )}
                  </div>
                  <p style={{ height: '40px', overflow: 'hidden' }}>{product.description}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Link href={`/product/${product.id}`}>
                      <button>Browse</button>
                    </Link>
                    <div className={styles.icoheart}>
                      <BiHeart />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default page;
