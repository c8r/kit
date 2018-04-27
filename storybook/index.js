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
      stories.add(name, () => element)
    })
}
