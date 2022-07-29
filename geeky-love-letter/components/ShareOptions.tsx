import React from 'react'
import social from '../styles/Social.module.scss'


const ShareOptions = ({message}: any) => {
  const email = `mailto:?subject=Here is a secret message written with geeky-love-letter&body=${message}`;
  const selectAndCopy = () => {
    navigator.clipboard.writeText(message)
    alert('copied!')
  }
  return (
    <section className={social.container}>
        <button className={social.button__send}><a href={email}>send your letter</a></button>
        <p>or <button onClick={selectAndCopy} className={social.button__copy}>copy binary version</button></p>
    </section>
  )
}

export default ShareOptions