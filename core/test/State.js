import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import sinon from 'sinon'
import { State } from '../src'

test('State creates state from props', t => {
  const instance = render(<State hello='hi' />).getInstance()
  t.is(instance.state.hello, 'hi')
})

test('State calls render function', t => {
  const fn = sinon.spy(() => false)
  render(<State render={fn} />)
  t.is(fn.callCount, 1)
})

test('State calls children function', t => {
  const fn = sinon.spy(() => false)
  render(<State children={fn} />)
  t.is(fn.callCount, 1)
})

test('State accepts component prop', t => {
  const fn = sinon.spy(() => false)
  render(<State component={fn} />)
  t.is(fn.callCount, 1)
})

test('State passes update method and state to render function', t => {
  const fn = sinon.spy(() => false)
  render(<State hello='hi' render={fn} />)
  const [ props ] = fn.args[0]
  t.is(props.hello, 'hi')
  t.is(typeof props.update, 'function')
})
