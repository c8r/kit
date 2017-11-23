const test = require('ava')
const styleguide = require('./src')

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')

test('styleguide does something awesome', t => {
  t.plan(1)

  styleguide({ config, theme })

  t.pass()
})
