import React from 'react';
import styles from '@/app/components/Navbar.module.css';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '@/app/assets/logo.png';
import Image from 'next/image';

const Navbar = () => {

  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
        <div className={styles.logo}>
          <Image src={Logo} alt='Fashioncodes' />
        </div>
        </Link>
        <div className={styles.links}>
          <Link href='/shop'>Shop</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.icons}>
          <Link href='/cart'>
          <div className={styles.ico}>
            <FaShoppingCart/>
          </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;

