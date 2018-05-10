import React from 'react'
import PropTypes from 'prop-types'

class State extends React.Component {
  static displayName = 'State'

  static propTypes = {
    render: PropTypes.func,
    component: PropTypes.func,
    children: PropTypes.func
  }

  state = this.props

  update = (...args) => this.setState(...args)

  render () {
    const {
      render,
      component: Component,
      children,
      ...props
    } = this.props

    const renderProps = {
      ...this.state,
      update: this.update
    }

    if (typeof Component === 'function') {
      return <Component {...renderProps} />
    }

    if (typeof render === 'function') {
      return render(renderProps)
    }

    if (typeof children === 'function') {
      return children(renderProps)
    }

    return false
  }
}

State.displayName = 'State'

export default State
