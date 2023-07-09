import React from 'react';
import styles from '@/app/components/Footer.module.css';

const Footer = () => {
  return (
    <>
       <footer className={styles.footer}>
      <p className={styles.footer__text}>© 2023 Fashioncodes. All rights reserved.</p>
    </footer>
    </>
  );
}

export default Footer;
