const withMDX = require('@zeit/next-mdx')()

module.exports = withMDX({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [defaultLoaders.babel, '@mdx-js/loader']
    })

    return config
  }
})
