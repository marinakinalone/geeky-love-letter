import React from 'react'
import styles from '../styles/Home.module.scss'
import cx from 'classnames';
import Link from 'next/link';
import { FooterProps } from '../utils/interface';

const Footer = ({routeMessage, route}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <p>Made with <span className={cx(styles.pink, styles.binary)}>0110110001101111011101100110010</span></p>
       <p>&nbsp;by <a className={styles.link} href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a className={styles.link} href="https://github.com/marinakinalone/geeky-love-letter/blob/main/LICENSE.txt" target="_blank" rel="noopener noreferrer">license</a></p>
       <p>&nbsp;|&nbsp;</p>
       <Link href={route}><a className={styles.link}>{routeMessage}</a></Link>
    </footer>
  )
}

export default Footer