import fs from 'fs'
import test from 'ava'
import execa from 'execa'

test('styleguide logs to stdout', async t => {
  const result = await execa('./dist/cli.js', ['docs', '-d', 'out'])

  t.snapshot(result.stdout)
})

test('styleguide writes an html file', async t => {
  await execa('./dist/cli.js', 'docs/components', ['-d out'])

  const result = fs.readFileSync('./out/components/box', 'utf8')

  t.snapshot(result)
})
