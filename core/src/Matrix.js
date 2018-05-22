import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import nano from 'nano-style'
import { Flex, Box } from './ui'

const Root = nano(Flex)({
  overflowX: 'auto'
})

export default ({ component, x = [], y = [], width = 512 }) => {
  const Component = component

  return (
    <Fragment>
      {y.map((row, i) => (
        <Root key={i}>
          {x.map((col, j) => (
            <Box key={[i, j].join()} w={width}>
              <Component {...row} {...col} />
            </Box>
          ))}
        </Root>
      ))}
    </Fragment>
  )
}
