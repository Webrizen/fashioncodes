import styles from '@/app/page.module.css';
import Image from 'next/image';
import heroImg from '@/app/assets/hero.png';
import { BiSolidOffer } from 'react-icons/bi';

export default function Home() {
  return (
    <>
    <div className={styles.hero}>
      <div className={styles.left}>
        <span><BiSolidOffer/> Flat 10% OFF On Your First Order!</span>
        <h1>
          Wear Codes With Fashion
          </h1>
          <p>
            Wear your favorite code with fashion. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
          <button>Explore</button>
      </div>
      <div className={styles.right}>
        <Image src={heroImg} alt='Hero Image' />
      </div>
    </div>
    </>
  )
}
