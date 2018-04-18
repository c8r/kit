'use strict'

const { h, Component, Text } = require('ink')
const Select = require('ink-select-input')

const { projectTemplates } = require('../lib/constants')
const items = projectTemplates.map(t => ({ label: t, value: t }))

const Item = ({ isSelected, label }) => (
  <div>
    <Text blue={isSelected}>{label}</Text>
    <br />
  </div>
)

const Init = () => {
  const handleProjectSelect = template => {
    console.log(template)
  }

  return (
    <div>
      <Text>Select project type</Text>
      <br />
      <Select
        items={items}
        itemComponent={Item}
        onSelect={handleProjectSelect}
      />
    </div>
  )
}

module.exports = Init
