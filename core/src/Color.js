import React from 'react'
import { Button } from 'rebass'
import { Debug } from '.'
import { flatten } from './util'
import { Box, Code, Flex, Text } from './ui'

export const Swatch = ({ name, value, ...props }) => (
  <React.Fragment>
    <Box p={3} {...props}>
      <Box bg={value} p={[3, 4, 5]} />
      <Text>{name}</Text>
      <Code f={5}>{value}</Code>
    </Box>
  </React.Fragment>
)

export default ({ colors }) => {
  const colorsObj = flatten(colors)
  const colorsArr = Object.keys(colorsObj).reduce((acc, key) =>
    acc.concat([{ key, name: key, value: colorsObj[key] }])
  , [])

  return (
    <Flex
      flexWrap='wrap'
      children={colorsArr.map(color =>
        <Swatch
          width={[1/2, 1/3, 1/5]}
          {...color}
        />
      )}
    />
  )
}
