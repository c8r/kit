import React from 'react'

import Box from './Box'

import {
  Code,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from '../library'

export default ({
  methods = [],
  props = {}
}) =>
  <Box>
    <Table>
      <Thead>
        <Tr>
          <Th>Props</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(props).map(k => {
          const prop = props[k]

          return (
            <Tr key={k}>
              <Td><Code>{k}</Code></Td>
              <Td><Code>{prop.type.name}</Code></Td>
              <Td><Code>{prop.required ? 'true' : 'false'}</Code></Td>
              <Td><Code>{prop.defaultValue ? prop.defaultValue.value : 'null'}</Code></Td>
              <Td w={2/3}>{prop.description || 'No description provided'}</Td>
            </Tr>
          )}
        )}
      </Tbody>
    </Table>

    <Table mt={4}>
      <Thead>
        <Tr>
          <Th>Functions</Th>
          <Th>Params</Th>
          <Th w={2/3}>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {methods.map(method =>
          <Tr key={method.name}>
            <Td><Code>{method.name}</Code></Td>
            <Td><Code>{method.params.map(p => p.name).join(', ')}</Code></Td>
            <Td>{method.docblock || 'No description provided'}</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  </Box>
