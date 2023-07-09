import React from 'react';
import styles from '@/app/styles/shop.module.css';

const page = () => {
  return (
    <>
    <div className={styles.shop}>
      <div className={styles.leftShop}>
        Left Shop
      </div>
      <div className={styles.rightShop}>
        Main Content
      </div>
    </div>
    </>
  );
}

export default page;
