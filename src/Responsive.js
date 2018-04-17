import React from 'react'
import PropTypes from 'prop-types'
import nano from 'nano-style'
import { CHANNEL, contextTypes } from './constants'
import Frame from './Frame'
import { Box, Flex } from './ui'

const Root = nano(Flex)({
  overflowX: 'auto'
})

const Card = nano(Box)({
  border: '1px solid #f6f6f6'
})

const Label = nano('div')({
  fontSize: '10px'
})

class Responsive extends React.Component {
  static contextTypes = contextTypes

  static defaultProps = {
    viewports: [
      { width: 375, height: 667 },
      { width: 414, height: 736 },
      { width: 1024, height: 768 },
      { width: 1366, height: 1024 }
    ]
  }

  render() {
    const { library, component } = this.context[CHANNEL]
    const { viewports, zoom, children } = this.props

    if (library && !component) return children

    return (
      <Root>
        {viewports.map(viewport => (
          <Box key={viewport.width + 'x' + viewport.height} p={3}>
            <Card>
              <Frame {...viewport} zoom={zoom} children={children} />
            </Card>
            <Label>
              {viewport.width} x {viewport.height} @{zoom}x
            </Label>
          </Box>
        ))}
      </Root>
    )
  }
}

export default Responsive
