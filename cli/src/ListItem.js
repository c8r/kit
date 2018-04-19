const { h, Text } = require('ink')

module.exports = ({ isSelected, label }) => (
  <div>
    <Text blue={isSelected}>{label}</Text>
    <br />
  </div>
)
