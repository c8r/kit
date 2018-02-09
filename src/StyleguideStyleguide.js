import React from 'react'

import {
  Styleguide,
  withMetadata
} from './'

export default withMetadata(props =>
  <Styleguide
    scope={{ props }}
    {...props}
  />
)
