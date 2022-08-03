import React from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';
import { OutputContentProps } from '../utils/interface';

// TODO change background color depending on route
// TODO rename classes

const OutputContent = ({output, title, label}: OutputContentProps) => {
  return (
    <section className={cx(converter.container, converter.container__binary)}>
      <h2 className={cx(converter.container__title, converter.title__binary)}>{title}</h2>
      <textarea className={cx(converter.container__content, converter.content__binary)} id="binary_content" value={output} readOnly></textarea>
      <label htmlFor="binary_content">{label}</label>
    </section>
  )
}

export default OutputContent