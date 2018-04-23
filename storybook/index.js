const { storiesOf } = require('@storybook/react')

const stories = storiesOf('Kit Examples', module)

const toArray = examples => Array.isArray(examples)
  ? examples
  : Object.keys(examples)
    .map(name => ({ name, element: examples[name] }))

module.exports = (examples = {}, opts = {}) => {
  toArray(examples)
    .forEach(({ name, element }) => {
      console.log(name, element)
      stories.add(name, () => element)
    })
}
