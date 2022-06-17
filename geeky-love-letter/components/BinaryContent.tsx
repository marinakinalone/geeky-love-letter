import React from 'react'
import converter from '../styles/Converter.module.scss'
import cx from 'classnames';

const BinaryContent = ({output}: any) => {
  return (
    <section className={cx(converter.container, converter.container__binary)}>
      <h2 className={cx(converter.container__title, converter.title__binary)}>binary generator</h2>
      <textarea className={cx(converter.container__content, converter.content__binary)} id="binary_content" value={output} readOnly></textarea>
      <label htmlFor="binary_content">text that is converted in binary language and is readonly</label>
    </section>
  )
}

export default BinaryContent