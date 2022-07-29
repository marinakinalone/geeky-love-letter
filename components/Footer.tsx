import React from 'react'
import styles from '../styles/Home.module.scss'
import cx from 'classnames';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with <span className={cx(styles.pink, styles.binary)}>01101100011011110111011001100101</span></p>
       <p> by <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a href="../license.txt" target="_blank" rel="noopener noreferrer">license</a></p>
    </footer>
  )
}

export default Footer