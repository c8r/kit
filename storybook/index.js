import React from 'react'
import { storiesOf } from '@storybook/react'

const toArray = examples => Array.isArray(examples)
  ? examples
  : Object.keys(examples)
    .map(name => ({ name, element: examples[name] }))

export default (examples = {}, opts = {}) => {
  const {
    name = 'Kit Examples'
  } = opts
  const stories = storiesOf(name, module)
  toArray(examples)
    .forEach(({ name, element }) => {
      if (Array.isArray(element)) {
        element.forEach((el, i) => {
          if (!el.name || !el.element) return
          stories.add(
            [ name, el.name ].join('.'),
            () => el.element
          )
        })
      } else if (!React.isValidElement(element) && typeof element === 'object') {
        Object.keys(element)
          .forEach(key => {
            const el = element[key]
            // todo handle functions/components
            if (!React.isValidElement(el)) return
            stories.add(
              [ name, key ].join('.'),
              () => el
            )
          })
      } else {
        stories.add(name, () => element)
      }
    })
}
