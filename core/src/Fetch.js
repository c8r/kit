import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

export default class Fetch extends Component {
  constructor() {
    super()

    this.state = {
      data: null,
      error: null,
      loading: true,
      fetching: false,
      fetched: false
    }
  }

  async componentDidMount() {
    const { url } = this.props

    const res = await fetch(url)
    const data = await res.json()

    this.setState({ data })
  }

  render() {
    const { data } = this.state

    return this.props.children({
      loading: { lol: 'fake' },
      error: { also: 'fake' },
      data
    })
  }
}
