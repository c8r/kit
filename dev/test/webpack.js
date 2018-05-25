import path from 'path'
import test from 'ava'
import dev from '..'

const opts = {
  dirname: path.join(__dirname, './fixtures')
}

test('starts a dev server', async t => {
  const server = await dev(opts)
  t.is(typeof server.options, 'object')
  const { port } = server.options
  t.is(typeof port, 'number')
  server.close()
})
