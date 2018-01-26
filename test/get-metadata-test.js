import test from 'ava'

import getsMetadata from '../src/get-metadata'

test('gets metadata', async t => {
  const result = await getsMetadata('docs', require('../library'))

  t.snapshot(result)
})
