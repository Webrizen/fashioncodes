"use client";
import { useState, useEffect, useContext } from "react";
import styles from "@/app/styles/shop.module.css";
import { BiHeart, BiMenu, BiSearch } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToWishList, wishList } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedRatings, setSelectedRatings] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 5000]);

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

  const handleAddToWishList = (productId) => {
    const product = products.find((item) => item.id === productId);
    addToWishList(product);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleRatingsChange = (e) => {
    setSelectedRatings(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setSelectedPriceRange([min, max]);
  };

  const handleMenu = () => {
    const MenuBar = document.getElementById("menu");
    const currentTransform = MenuBar.style.transform;
    if (currentTransform === "translateX(-200%)") {
      MenuBar.style.transform = "translateX(0%)";
    } else {
      MenuBar.style.transform = "translateX(-200%)";
    }
  };
  

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .filter((product) =>
      selectedGender ? product.gender === selectedGender : true
    )
    .filter((product) => (selectedSize ? product.size === selectedSize : true))
    .filter((product) =>
      selectedRatings ? product.ratings >= Number(selectedRatings) : true
    )
    .filter((product) =>
      selectedPriceRange
        ? product.price >= selectedPriceRange[0] &&
          product.price <= selectedPriceRange[1]
        : true
    );

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const uniqueGenders = [
    ...new Set(products.map((product) => product.gender)),
  ];

  const uniqueSizes = [...new Set(products.map((product) => product.size))];

  const uniquePriceRanges = [
    { min: 0, max: 500 },
    { min: 500, max: 1000 },
    { min: 1000, max: 2000 },
    { min: 2000, max: 5000 },
  ];

  return (
    <>
    <div className={`${styles.ico} ${styles.menu}`} style={{ fontSize: '2rem' }} onClick={handleMenu}>
          <BiMenu/>
        </div>
      <div className={styles.shop}>
        <div className={styles.leftShop} id="menu">
          <h4>Search</h4>
          <div className={styles.searchBox}>
            <input
              type="search"
              name="Search"
              id="Search"
              placeholder="Try Searching For Smartphones..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className={styles.ico}>
              <BiSearch />
            </div>
          </div>
          <hr style={{ margin: "10px" }} />
          <h4>Filters</h4>
          <div className={styles.catagories}>
            <span>CATEGORIES</span>
            <select
              name="catagories"
              id="catagories"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span>GENDER</span>
            <select
              name="gender"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">All Genders</option>
              {uniqueGenders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <span>DISCOUNT</span>
            <select name="discount" id="discount">
              <option value="Not available">Not Available</option>
            </select>
            <span>SIZE</span>
            <select
              name="size"
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="">All Sizes</option>
              {uniqueSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span>CUSTOMER RATINGS</span>
            <select
              name="ratings"
              id="ratings"
              value={selectedRatings}
              onChange={handleRatingsChange}
            >
              <option value="">All Ratings</option>
              <option value="5">5 Star Only</option>
              <option value="4">4+ Star ratings</option>
              <option value="3">3+ Star ratings</option>
            </select>
            <span>PRICE RANGE</span>
            <select
              name="priceRange"
              id="priceRange"
              value={selectedPriceRange.join(",")}
              onChange={handlePriceRangeChange}
            >
              <option value="">None</option>
              {uniquePriceRanges.map((priceRange, index) => (
                <option key={index} value={`${priceRange.min},${priceRange.max}`}>
                  ₹{priceRange.min} - ₹{priceRange.max}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.rightShop}>
          {loading ? (
            // Show advanced skeleton while data is being fetched
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
          ) : filteredProducts.length > 0 ? (
            // Render products once data is loaded and filtered
            filteredProducts.map((product, index) => (
              <div className={styles.card} key={index}>
                <Image
                  src={product.image}
                  alt="Product Image"
                  width={400}
                  height={600}
                  style={{
                    width: "auto",
                    height: "400px",
                    margin: "0 auto",
                  }}
                  objectFit="contain"
                />
                <h4>{product.title}</h4>
                <div>
                  <span>₹{product.price}</span>
                  {"  "}
                  {"  "}
                  <span className={styles.cutprice}>₹{product.cutPrice}</span>
                </div>
                <div
                  className={styles.rating}
                  style={{ color: "gold" }}
                >
                  {Array.from({
                    length: Math.floor(product.ratings),
                  }).map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <p style={{ height: "40px", overflow: "hidden" }}>
                  {product.description}
                </p>
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
                  <div
                    className={styles.icoheart}
                    title="Add To Wishlist"
                    onClick={function Wishme() {
                      handleAddToWishList(product.id888);
                      const notify = () =>
                        toast(
                          "Successfully Added Your Product To Wish list!"
                        );
                      notify();
                    }}
                  >
                    <BiHeart />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products found matching the selected filters.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;