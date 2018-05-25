import path from 'path'
import test from 'ava'
import dev from '..'

const opts = {
  dirname: path.join(__dirname, './fixtures')
}

test('starts a dev server', async t => {
  const { server, stats } = await dev(opts)
  t.is(typeof server.options, 'object')
  t.is(typeof stats, 'object')
  const { port } = server.options
  t.is(typeof port, 'number')
  server.close()
})
