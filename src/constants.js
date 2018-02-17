import PropTypes from 'prop-types'

export const CHANNEL = 'c8r/kit'

export const contextTypes = {
  [CHANNEL]: PropTypes.shape({
    update: PropTypes.func.isRequired,
    library: PropTypes.bool,
    component: PropTypes.string
  })
}
