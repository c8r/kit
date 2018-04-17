import React from 'react'
import { contextTypes, CHANNEL } from './constants'
import Style from './Style'
import Font from './Font'

class Provider extends React.Component {
  static childContextTypes = contextTypes

  static defaultProps = {
    css: '*{box-sizing:border-box}body{margin:0}',
    scope: {},
    theme: {}
  }

  constructor() {
    super()

    this.state = {
      component: null
    }

    this.update = (...args) => this.setState(...args)
  }

  getChildContext() {
    return {
      [CHANNEL]: {
        update: this.update,
        theme: this.props.theme,
        scope: this.props.scope,
        ...this.state
      }
    }
  }

  componentDidMount() {
    const component = window.location.hash.replace(/^#/, '')
    this.setState({ component })
  }

  render() {
    const { css, fontFamily, lineHeight, color } = this.props

    return (
      <React.Fragment>
        <Style children={css} />
        <Font fontFamily={fontFamily} lineHeight={lineHeight} color={color}>
          {this.props.children}
        </Font>
      </React.Fragment>
    )
  }
}

export default Provider
