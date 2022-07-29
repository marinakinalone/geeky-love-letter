import React from 'react'
import styles from '../styles/Home.module.scss'
import cx from 'classnames';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Geeky <span className={styles.pink}>Love</span> Letter</h1>
      <p>because <span className={styles.pink}>NERD</span> is the new <span className={cx(styles.pink, styles.binary)}>01010011010001010101100001011001</span></p>
    </header>
  )
}

export default Header