import React from 'react'
import social from '../styles/Social.module.scss'

const ShareOptions = ({message, setDisplayAlert}: any) => {
  const email = `mailto:?subject=Here is a secret message written with geeky-love-letter&body=${message}`;
  const selectAndCopy = () => {
    navigator.clipboard.writeText(message)
    setDisplayAlert(true);
    setTimeout(() => setDisplayAlert(false), 4000)
  }
  return (
    <section className={social.container}>
        <a className={social.button__send} href={email}>send your letter</a>
        <p>or <button onClick={selectAndCopy} className={social.button__copy}>copy binary version</button></p>
    </section>
  )
}

export default ShareOptions