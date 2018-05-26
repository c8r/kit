import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

export default class Fetch extends Component {
  constructor() {
    super()

    this.state = {
      fetchState: 'loading',
      data: null,
      error: null,
      loading: true,
      fetching: true,
      fetched: false
    }
  }

  async componentDidMount() {
    const { url } = this.props

    try {
      const res = await fetch(url)
      const data = await res.json()

      this.setState({ data })
    } catch (error) {
      this.setState({ error })
    }

    this.setState({
      loading: false,
      fetching: false,
      fetched: true
    })
  }

  handleDataChange = e => {
    if (this.state.fetching) {
      return
    }

    const { value } = e.target
    this.setState({ data: value })
  }

  handleFetchStateChange = e => {
    if (this.state.fetching) {
      return
    }

    const { value } = e.target
    this.setState({ fetchState: value })
  }

  render = () => this.props.children({
    onDataChange: this.handleDataChange,
    onFetchStateChange: this.handleFetchStateChange,
    ...this.state
  })
}
