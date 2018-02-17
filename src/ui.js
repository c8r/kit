import nano from 'nano-style'
import {
  color,
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
} from 'styled-system'

export const Box = nano('div')(
  color,
  space,
  width,
  flex,
  alignSelf
)
Box.displayName = 'Box'

export const Flex = nano(Box)({
    display: 'flex'
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
)
Flex.displayName = 'Flex'

const px = n => typeof n === 'number' ? n + 'px' : n

const gridWidth = props => props.width ? ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
}) : null

const gridGap = props => props.gap ? ({
  gridGap: px(props.gap)
}) : null

const gridHeight = props => props.height ? ({
  gridAutoRows: px(props.height)
}) : null

export const Grid = nano('div')({
  display: 'grid'
},
  gridWidth,
  gridHeight,
  gridGap
)

Grid.displayName = 'Grid'

Grid.defaultProps = {
  width: 256,
  height: 192,
}

export default {
  Box,
  Flex,
  Grid,
}
