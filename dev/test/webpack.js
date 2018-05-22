import path from 'path'
import test from 'ava'
import dev from '../lib'
import getConfig from '../lib/config'
import htmlTemplate from '../lib/html-template'

const opts = {
  input: '.',
  dirname: path.join(__dirname, './fixtures'),
  config: path.join(__dirname, './fixtures/config.js')
}

test('returns a webpack dev config object', t => {
  const config = getConfig(opts)
  t.snapshot(config)
})

test('returns a merged webpack config object', t => {
  const config = getConfig({
    ...opts,
    webpack: path.join(__dirname, './fixtures/webpack.config.js')
  })
  t.snapshot(config)
})

test('html-template returns an html string', t => {
  const html = htmlTemplate({
    title: 'Hello',
    css: 'body{color:tomato}'
  })
  t.snapshot(html)
})

test('html-template returns an html string with options', t => {
  const html = htmlTemplate({
    title: 'Hello',
    html: 'hi',
    css: 'body{color:tomato}',
    meta: [{ name: 'twitter:card', content: 'summary' }],
    links: [{ href: 'base.css', rel: 'stylesheet' }],
    stylesheets: [],
    static: true
  })
  t.snapshot(html)
})

test('starts a dev server', async t => {
  const server = await dev(opts)
  t.is(typeof server.options, 'object')
  const { port } = server.options
  t.is(typeof port, 'number')
  server.close()
})
