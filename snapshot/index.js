const React = require('react')
const { create: render } = require('react-test-renderer')

const toArray = obj => Object.keys(obj)
  .map(name => {
    const example = obj[name]
    const element = React.isValidElement(example) ? example : React.createElement(example)
    return {
      name,
      element
    }
  })

const renderJSON = el => render(el).toJSON()

module.exports = (examples = {}, opts = {}) => {
  const arr = Array.isArray(examples) ? examples : toArray(examples)

  arr.forEach(({ name, element }) => (
    test(`${name} renders`, () => {
      const tree = renderJSON(element)
      expect(tree).toMatchSnapshot()
    })
  ))
}
