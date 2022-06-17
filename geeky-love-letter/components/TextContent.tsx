import React from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';

const TextContent = ({handleChange, input}:any) => {
  return (
    <section className={converter.container}>
      <h2 className={converter.container__title} >text editor</h2>
      <textarea className={cx(converter.container__content, converter.content__text)} id="text_content" name="text_content" placeholder="Write a secret love letter to your nerd crush and send them the binary version." onChange={handleChange} value={input}>
      </textarea>
      <label htmlFor="text_content">text to be converted in binary language</label>
    </section>
  )
}

export default TextContent