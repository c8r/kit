import test from 'ava'
import webfont from './index'

test('exports a fonts array', t => {
  t.true(Array.isArray(webfont.fonts))
})

test('exports the api url', t => {
  t.is(typeof webfont.apiURL, 'string')
})

test('plusify replaces spaces with +', t => {
  const result = webfont.plusify('hello there')
  t.is(result, 'hello+there')
})

test('isWebfont returns true for Roboto Mono', t => {
  const result = webfont.isWebfont('Roboto Mono')
  t.true(result)
})

test('isWebfont returns false for Helvetica', t => {
  const result = webfont.isWebfont('Helvetica')
  t.false(result)
})

test('getURL returns a formatted url', t => {
  const url = webfont.getURL('"Roboto Mono", monospace')
  console.log(url)
  t.snapshot(url)
})

test('getURL adds font weight variants', t => {
  const url = webfont.getURL('"Roboto Mono", monospace', ['400', '600'])
  t.snapshot(url)
})

test('getURL returns false for non-webfonts', t => {
  const url = webfont.getURL('"Helvetica", sans-serif')
  t.false(url)
})

test('getLinkTag returns a formatted url', t => {
  const tag = webfont.getLinkTag('"Roboto Mono", monospace')
  t.snapshot(tag)
})

test('getLinkTag returns false for non-webfonts', t => {
  const tag = webfont.getLinkTag('"Helvetica", sans-serif')
  t.false(tag)
})
