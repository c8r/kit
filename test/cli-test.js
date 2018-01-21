import fs from 'fs'
import test from 'ava'
import execa from 'execa'

test('styleguide writes an html file', async t => {
  await execa('./dist/cli.js', 'docs/components', ['-d out'])

  const result = fs.readFileSync('./out/components/Box', 'utf8')

  t.snapshot(result)
})
