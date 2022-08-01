import React from 'react'
import social from '../styles/Social.module.scss'


const CopiedAlert = () => {
  return (
    <section className={social.notification}>
        <div className={social.heartbeat}><div></div></div>
        <p>Message copied to clipboard!</p>
    </section>
  )
}

export default CopiedAlert