import React from 'react'

class Knobs extends React.Component {
  constructor (props) {
    super()
    this.state = props
    this.update = fn => this.setState(fn)
  }

  render () {
    const child = React.Children.only(this.props.children)
    return (
      <React.Fragment>
        {React.cloneElement(child, this.state)}
      </React.Fragment>
    )
  }
}

export default Knobs
