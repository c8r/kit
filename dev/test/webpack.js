import test from 'ava'
import getConfig from '../lib/config'

const opts = {
  dirname: __dirname,
  config: 'config.js',
}

test('returns a webpack dev config object', t => {
  const config = getConfig(opts)
  t.snapshot(config)
})
