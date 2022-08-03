import React, { useState } from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';
import { InputContentProps } from '../utils/interface';

const InputContent = ({placeholder, convertMessage, title, label}: InputContentProps) => {
  const [input, setInput] = useState<string>('')
  const handleChange = (content: string) => {
    setInput(content)
    convertMessage(content)
  }

  return (
    <section className={converter.container}>
      <h2 className={converter.container__title} >{title}</h2>
      <textarea className={cx(converter.container__content, converter.content__input)} id="input" name="input" placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} value={input}>
      </textarea>
      <label htmlFor="input">{label}</label>
    </section>
  )
}

export default InputContent