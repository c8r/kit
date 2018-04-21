const { getOptions } = require('loader-utils')
const mdx = require('@mdx-js/mdx')
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

module.exports = async function(src) {
  const callback = this.async()
  const options = getOptions(this)

  const { content, data } = matter(src)
  const opts = Object.assign({}, options, { props: data })

  const result = await mdx(content, opts)

  const code = `
  import React from 'react'
  import { MDXTag } from '@mdx-js/tag'

  export const props = ${stringifyObject(data)}

  ${result}
  `

  return callback(null, code)
}
