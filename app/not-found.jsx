import Link from 'next/link';
import styles from '@/app/styles/404.module.css';
import React from 'react';

const NotFound = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href='/'>
        <button>Go Back</button>
      </Link>
    </div>
    </>
  );
}

export default NotFound;
