const emoji = require('remark-emoji')
const images = require('remark-images')
const unwrapImages = require('remark-unwrap-images')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [emoji, images, unwrapImages],
    hastPlugins: []
  }
})

module.exports = withMDX()
