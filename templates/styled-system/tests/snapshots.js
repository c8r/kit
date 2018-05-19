import snapshot from '@compositor/kit-snapshot'
import 'jest-styled-components'
import * as examples from '../examples'

import React from 'react'
import { create } from 'react-test-renderer'

console.log(examples.Box.displayName)

Object.keys(examples).forEach(name => {
  const Component = examples[name]
  console.log(name, typeof Component)
  console.log(
    Object.keys(Component)
  )
  const json = create(
    <Component />
  ).toJSON()
  console.log(json)
})

snapshot(examples)
