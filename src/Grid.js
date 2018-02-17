import nano from 'nano-style'

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

const Grid = nano('div')({
  display: 'grid',
  // alignItems: 'center',
  // justifyContent: 'center',
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

export default Grid
