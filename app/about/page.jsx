import React from 'react';
import styles from '@/app/styles/About.module.css';

const page = () => {
  return (
    <>
      <div className={styles.container}>
      <h1>About Fashioncodes</h1>
      <div className={styles.content}>
        <p>
          Fashioncodes is a premier online destination for fashion enthusiasts. We offer a wide range of trendy clothing,
          shoes, accessories, and more for both men and women. Our mission is to provide our customers with the latest
          fashion styles, exceptional quality, and a seamless shopping experience.
        </p>
        <p>
          At Fashioncodes, we believe that fashion is a form of self-expression. Our curated collection showcases a
          diverse range of styles, from casual streetwear to elegant evening wear. Whether you're looking for everyday
          essentials or statement pieces for a special occasion, we have something for everyone.
        </p>
        <p>
          We pride ourselves on offering high-quality products from renowned brands and emerging designers. Our team of
          fashion experts carefully selects each item to ensure that it meets our standards of style, comfort, and
          durability. We constantly update our inventory to stay on top of the latest trends, so you can always find
          something fresh and exciting at Fashioncodes.
        </p>
        <p>
          In addition to our extensive product range, we are committed to providing excellent customer service. Our
          dedicated support team is here to assist you with any questions or concerns you may have. We strive to make
          your shopping experience hassle-free and enjoyable, from browsing our website to receiving your order at your
          doorstep.
        </p>
        <p>
          Thank you for choosing Fashioncodes as your go-to fashion destination. We appreciate your support and look
          forward to serving you with the best in fashion. Happy shopping!
        </p>
      </div>
    </div>
    </>
  );
}

export default page;
