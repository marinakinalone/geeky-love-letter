import React, { useState } from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';
import { TextContentProps } from '../utils/interface';

const TextContent = ({placeholder, convertMessage}: TextContentProps) => {
  const [input, setInput] = useState<string>('')
  const handleChange = (content: string) => {
    setInput(content)
    convertMessage(content)
  }

  return (
    <section className={converter.container}>
      <h2 className={converter.container__title} >text editor</h2>
      <textarea className={cx(converter.container__content, converter.content__text)} id="text_content" name="text_content" placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} value={input}>
      </textarea>
      <label htmlFor="text_content">text to be converted in binary language</label>
    </section>
  )
}

export default TextContent