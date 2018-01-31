import test from 'ava'

import getsMetadata from '../src/metadata'

test('gets metadata', async t => {
  const result = await getsMetadata({
    dir: 'docs',
    library: require('../library')
  })

  t.snapshot(result)
})
