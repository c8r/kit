import React from 'react'
import { render, Simulate } from 'react-testing-library'
import sinon from 'sinon'
import { State } from '../src'

const Component = props => (
  <State
    count={0}
    render={({ count, update }) => (
      <React.Fragment>
        <pre>{'<State />'}</pre>
        <samp data-testid="count">{count}</samp>
        <button onClick={e => update(s => ({ count: s.count - 1 }))}>
          -
        </button>
        <button onClick={e => update(s => ({ count: s.count + 1 }))}>
          +
        </button>
      </React.Fragment>
    )}
  />
)

test('State maintains a state context that can be updated', () => {
  const { getByText, getByTestId } = render(<Component />)
  const incrementButton = getByText('+')
  const decrementButton = getByText('-')

  Simulate.click(incrementButton)
  Simulate.click(incrementButton)
  expect(getByTestId('count').textContent).toBe('2')

  Simulate.click(decrementButton)
  expect(getByTestId('count').textContent).toBe('1')
})
