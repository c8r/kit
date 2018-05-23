import React from 'react'
import PropTypes from 'prop-types'
import { ScopeProvider } from 'react-scope-provider'
import createElement from './createElement'

class Markdown extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    scope: PropTypes.object,
  }

  static defaultProps = {
    src: '',
    scope: {},
  }

  render() {
    return (
      <ScopeProvider scope={this.props.scope}>
        <React.Fragment>
          {createElement(this.props)}
        </React.Fragment>
      </ScopeProvider>
    )
  }
}

export default Markdown
