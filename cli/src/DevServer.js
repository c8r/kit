'use strict'

const { h, Component, Text } = require('ink')
const dev = require('@compositor/kit-dev')
const open = require('react-dev-utils/openBrowser')

module.exports = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      server: null,
      err: null
    }
  }

  componentDidMount() {
    const opts = Object.assign({
      input: this.props.input
    }, this.props.config, this.props.flags)
    dev(opts)
      .then(server => {
        this.setState({ server })
      })
      .catch(err => {
        this.setState({ err })
      })
  }

  render() {
    const { server, err } = this.state
    if (err) {
      return 'Error: ' + err.toString()
    }

    if (!server) {
      return 'Starting dev server...'
    }

    const { port } = server.options

    if (this.props.open) {
      open(`http://localhost:${port}`)
    }

    return 'Server listening on port: ' + port
  }
}
