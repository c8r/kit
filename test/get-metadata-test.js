import test from 'ava'

import getsMetadata from '../src/get-metadata'

test('gets metadata', async t => {
  const result = await getsMetadata({
    dir: 'docs',
    library: require('../library')
  })

  t.snapshot(result)
})
