import React from 'react'
import styles from '../styles/Home.module.scss'
import cx from 'classnames';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
        <h1 className={styles.header__title}><span className={styles.title__blue}>Geeky </span><span className={cx(styles.pink, styles.title__pink)}>Love</span><span className={styles.title__blue}> Letter</span></h1>
        <p>because <span className={styles.pink}>NERD</span> is the new <span className={cx(styles.pink, styles.binary)}>01010011010001010101100001011001</span></p>
        </a>
      </Link>
    </header>
  )
}

export default Header