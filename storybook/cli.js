#!/usr/bin/env node
const path = require('path')
const meow = require('meow')
const {
  buildDev,
  configLoaderCreator,
} = require('@storybook/core/server')
const webpack = require('webpack')

// https://github.com/storybooks/storybook/blob/master/app/react/src/server/config.js
const defaultConfig = require('@storybook/react/dist/server/config/babel')
const wrapBabelConfig = require('@storybook/react/dist/server/wrapBabelConfig').default
const getBaseConfig = require('@storybook/react/dist/server/config/webpack.config').default

const cli = meow(`
  Usage

    $ kit-storybook examples

  Options
    -p --port   Port for Storybook development server
    --name      Name displayed in storybook (default Kit Examples)
`, {
  flags: {
    port: {
      type: 'string',
      alias: 'p'
    },
    name: {
      type: 'string'
    }
  }
})

const [ dirname ] = cli.input
const opts = Object.assign({
  port: 8000,
}, cli.flags)

const DIRNAME = path.isAbsolute(dirname) ? dirname : path.join(process.cwd(), dirname)

const loadConfig = (...args) => {
  args[1].plugins.push(
    new webpack.DefinePlugin({
      DIRNAME: JSON.stringify(DIRNAME),
      KITNAME: JSON.stringify(opts.name),
    })
  )
  const config = configLoaderCreator({
    defaultConfigName: 'create-react-app',
    defaultBabelConfig: defaultConfig,
    wrapBabelConfig
  })(...args)
  return config
}

process.argv.push('--port', opts.port)
process.argv.push('--config-dir', __dirname)

buildDev({
  // what is this for?
  packageJson: require('./package.json'),
  getBaseConfig,
  loadConfig,
  defaultFavIcon: path.join(__dirname, 'favicon.png'),
})
