import React from 'react'

class Catch extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidCatch(err) {
    this.setState({ err })
  }

  componentWillReceiveProps(next) {
    if (next.children !== this.props.children) {
      this.setState({ err: null })
    }
  }

  render() {
    const { err } = this.state

    if (err) return <pre>{err.toString()}</pre>

    return this.props.children
  }
}

export default Catch
