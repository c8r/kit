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
  alignSelf,
  typeScale,
  util
} from 'styled-system'

const { px } = util

export const Box = nano('div')(color, space, width, flex, alignSelf)
Box.displayName = 'Box'

export const Flex = nano(Box)(
  {
    display: 'flex'
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
)
Flex.displayName = 'Flex'

const gridWidth = props =>
  props.width
    ? {
        gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
      }
    : null

const gridGap = props =>
  props.gap
    ? {
        gridGap: px(props.gap)
      }
    : null

const gridHeight = props =>
  props.height
    ? {
        gridAutoRows: px(props.height)
      }
    : null

export const Grid = nano('div')(
  {
    display: 'grid'
  },
  gridWidth,
  gridHeight,
  gridGap
)
Grid.displayName = 'Grid'
Grid.defaultProps = {
  width: 256,
  height: 192
}

export const Label = nano('label')(
  {
    display: 'block',
    fontSize: '10px'
  },
  space
)
Label.displayName = 'Label'

export const Input = nano('input')(
  {
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 1.25,
    appearance: 'none',
    padding: '4px',
    color: 'inherit',
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '4px',
    '&:focus': {}
  },
  space
)
Input.displayName = 'Input'
Input.defaultProps = {
  m: 0
}

export const Select = nano('select')(
  {
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 1.25,
    // appearance: 'none',
    padding: '4px',
    color: 'inherit',
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '4px',
    '&:focus': {}
  },
  space
)
Select.displayName = 'Select'
Select.defaultProps = {
  m: 0
}

export const Divider = nano('hr')({
  width: '100%',
  margin: 0,
  border: 0,
  borderBottom: '1px solid #ddd'
})
Divider.displayName = 'Divider'

export const Text = nano('p')({ typeScale })
Text.displayName = 'Text'

export default {
  Box,
  Flex,
  Grid,
  Label,
  Input,
  Select,
  Divider
}
