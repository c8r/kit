import React from 'react'

import Debug from './Debug'
import Box from './Box'

export default ({ styleguide: { components }, component }) => {
  const metadata = components[component].styled.imports || []
  const styledSystem = metadata.find(m => m.source === 'styled-system')

  return (
    <Box>
      <h3>Styled System</h3>
      <p>
        The <code>{component}</code> component uses the following styling system functions.
      </p>

      <ul
        children={styledSystem.names.map(system =>
          <li key={system}>{system}</li>
        )}
      />
    </Box>
  )
}
