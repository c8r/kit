import test from 'ava'
import path from 'path'
import parse from '../lib/parse-args'

test('returns init for no argument', t => {
  const { cmd, input } = parse([])
  const here = path.resolve('.')
  t.is(cmd, 'init')
  t.is(input, here)
})

test('return dev for single argument', t => {
  const { cmd, input } = parse([ 'hello' ])
  t.is(cmd, 'dev')
  t.is(input, path.resolve('hello'))
})

test('return dev with two arguments', t => {
  const { cmd, input } = parse([ 'dev', 'hello' ])
  t.is(cmd, 'dev')
  t.is(input, path.resolve('hello'))
})

test('returns build', t => {
  const { cmd, input } = parse([ 'build', 'hi' ])
  t.is(cmd, 'build')
  t.is(input, path.resolve('hi'))
})

test('returns publish', t => {
  const { cmd, input } = parse([ 'publish', 'docs' ])
  t.is(cmd, 'publish')
  t.is(input, path.resolve('docs'))
})
