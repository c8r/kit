import fs from 'fs'
import test from 'ava'
import execa from 'execa'

test.skip('styleguide writes an html file', async t => {
  t.skip()
  await execa('./dist/cli.js', 'docs/components', ['-d out'])

  const result = fs.readFileSync('./out/Box/index.html', 'utf8')

  t.snapshot(result)
})
