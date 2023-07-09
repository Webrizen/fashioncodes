import React from 'react';
import styles from '@/app/components/Navbar.module.css';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import Logo from '@/app/assets/logo.png';
import Image from 'next/image';

const Navbar = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={Logo} alt='Fashioncodes' />
        </div>
        <div className={styles.links}>
          <Link href='/'>Shop</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.icons}>
          <div className={styles.ico}>
            <FaShoppingCart/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

