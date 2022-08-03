import React from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';
import { OutputContentProps } from '../utils/interface';

const OutputContent = ({output, title, label, type}: OutputContentProps) => {
  const pink = "#f2a3c2"
  const purple = "#b9a9d2"

  const setBackgroundColor = () => type === "text" ? {backgroundColor: pink, border: `2px solid ${pink}`}:{backgroundColor: purple, border: `2px solid ${purple}`}
  const setColor = () => type === "text" ? {color: pink}:{color: purple}

  return (
    <section className={cx(converter.container, converter.container__output)}>
      <h2 className={converter.container__title} style={setColor()}>{title}</h2>
      <textarea
        className={cx(converter.container__content, converter.content__output)}
        style={setBackgroundColor()}
        id="binary_content"
        value={output}
        readOnly
      ></textarea>
      <label htmlFor="binary_content">{label}</label>
    </section>
  )
}

export default OutputContent