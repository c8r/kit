import nano from 'nano-style'
import PropTypes, { string, number, bool, oneOfType } from 'prop-types'
import chroma from 'chroma-js'

export const gradient = (angle = 0, size, color) =>
  `linear-gradient(${angle}deg, transparent, transparent ${size -
    1}px, ${color} ${size - 1}px)`

export const alpha = (val, a) => {
  try {
    return chroma(val)
      .alpha(a)
      .css()
  } catch (e) {
    return val
  }
}

const XRay = nano('div')(
  ({
    padding,
    color,
    backgroundColor,
    outline,
    grid,
    center,
    disabled,
    style
  }) =>
    disabled
      ? { ...style, padding }
      : {
          ...style,
          padding,
          color,
          backgroundColor,
          backgroundPosition: center ? 'center center' : 'left top',
          '& *': {
            color: outline ? `${color} !important` : null,
            outline: outline
              ? `1px solid ${alpha(color, 1 / 2)} !important`
              : null,
            backgroundColor: outline
              ? `${alpha(color, 1 / 8)} !important`
              : null
          },
          ...getGrid(grid, alpha(color, 1 / 4))
        }
)

const getGrid = (grid, color) => {
  if (!grid) return null
  const size = grid && typeof grid === 'number' ? grid : 8
  return {
    backgroundImage: `${gradient(0, size, color)}, ${gradient(
      90,
      size,
      color
    )}`,
    backgroundSize: `${size}px ${size}px`
  }
}

XRay.propTypes = {
  padding: oneOfType([string, number]),
  color: string,
  backgroundColor: string,
  outline: bool,
  grid: oneOfType([number, bool]),
  center: bool
}

XRay.defaultProps = {
  padding: 0,
  outline: true,
  grid: 8,
  color: '#6bf',
  backgroundColor: '#001424',
  center: false
}

export default XRay
