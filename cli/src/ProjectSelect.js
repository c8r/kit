const { h, Text } = require('ink')
const Select = require('ink-select-input')

module.exports = ({ items, onSelect }) => (
  <div>
    <Text>Select project template</Text>
    <br />
    <Select items={items} itemComponent={Item} onSelect={onSelect} />
  </div>
)
