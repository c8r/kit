import test from 'ava'

import processMetadata from '../src/process-metadata'

test('processes metadata', async t => {
  const result = await processMetadata('docs', require('../library'))

  t.snapshot(result)
})
