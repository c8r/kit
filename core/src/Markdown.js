import React from 'react'
import Rebass from 'rebass'
import { transform } from 'buble'
import mdx from '@mdx-js/mdx'

export default ({ children }) => {
  const jsx = mdx.sync(children).replace('export default ({components}) =>', '' )

  console.log(transform(jsx))

  return <h1>hi</h1>
}
