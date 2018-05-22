import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { Donut } from 'rebass'

import { Matrix } from '../src'

const renderJSON = el => render(el).toJSON()

test('Matrix renders all examples', t => {
  const result = renderJSON(
    <Matrix
      x={[
        { color: 'blue ' },
        { color: 'pink' },
        { color: 'tomato' },
        { color: 'purple' }
      ]}
      y={[
        { value: 1 / 5 },
        { value: 1 / 4 },
        { value: 1 / 3 },
        { value: 3 / 4 }
      ]}
      component={Donut}
    />
  )

  t.snapshot(result)
})
