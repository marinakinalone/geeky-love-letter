import React, { Dispatch, SetStateAction } from 'react'
import social from '../../styles/Social.module.scss' //TODO
import { ShareOptionsProps } from '../../utils/interface';


const CopyMessage = ({message, setDisplayAlert}: ShareOptionsProps) => {
  const selectAndCopy = () => {
    navigator.clipboard.writeText(message)
    setDisplayAlert(true);
    setTimeout(() => setDisplayAlert(false), 4000)
  }
  return (
    <section className={social.container}>
        <button onClick={selectAndCopy} className={social.button__send}>copy your message</button>
    </section>
  )
}

export default CopyMessage