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

// const getBaseConfig = require('.@storybook/react/dist/server/config/webpack.config')
// const loadConfig = require('@storybook/react/dist/server/config')

const cli = meow(`
  Usage

    $ kit-storybook examples

`, {})

const [ dirname ] = cli.input

const DIRNAME = path.isAbsolute(dirname) ? dirname : path.join(process.cwd(), dirname)

const loadConfig = (...args) => {
  args[1].plugins.push(
    new webpack.DefinePlugin({
      DIRNAME: JSON.stringify(DIRNAME),
    })
  )
  const config = configLoaderCreator({
    defaultConfigName: 'create-react-app',
    defaultBabelConfig: defaultConfig,
    wrapBabelConfig
  })(...args)
  return config
}

process.argv.push('--port', '9000')
process.argv.push('--config-dir', path.join(__dirname, '.storybook'))

buildDev({
  // what is this for?
  packageJson: require('./package.json'),
  getBaseConfig,
  loadConfig,
  defaultFavIcon: path.join(__dirname, 'favicon.png'),
})

// defaultFavIcon: path.join(__dirname, 'node_modules/@storybook/react/dist/server/public/favicon.ico'),

// start dev server
// not sure if this will work
// process.argv.push('--port 9000')
// require('@storybook/react/dist/server')
