import React from 'react'
import nano from 'nano-style'
import {
  CHANNEL,
  contextTypes
} from './constants'

const Root = nano('a')({
  color: 'inherit',
  textDecoration: 'none',
  overflow: 'hidden',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#f6f6f6',
  '&:hover': {
    borderColor: '#ddd'
  }
}, props => props.center ? ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
}) : null )

Root.defaultProps = {
  center: true,
}

class Example extends React.Component {
  static contextTypes = contextTypes
  render () {
    const { update } = this.context[CHANNEL]
    const { name } = this.props

    return (
      <Root
        {...this.props}
        id={name}
        href={'#' + name}
        onClick={e => update({ component: name })}
      />
    )
  }
}

export default Example
