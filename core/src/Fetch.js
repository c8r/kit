import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

const fetchStates = ['loading', 'fetched', 'error']

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
    this.fetchData()
  }

  fetchData = async () => {
    const { url } = this.props

    try {
      const res = await fetch(url)
      const data = await res.json()

      this.setState({
        fetchState: 'fetched',
        editedData: data,
        data
      })
    } catch (error) {
      this.setState({
        error,
        fetchState: 'error'
      })
    }

    this.setState({
      loading: false,
      fetching: false,
      fetched: true
    })
  }

  handleRefetchClick = () => this.fetchData()

  handleDataChange = value => {
    if (this.state.fetching) {
      return
    }

    try {
      const data = JSON.parse(value)
      this.setState({ data, editedData: value })
    } catch (e) {
      this.setState({ editedData: value })
    }
  }

  handleFetchStateChange = e => {
    if (this.state.fetching) {
      return
    }

    const { value } = e.target

    this.setState({
      fetchState: value,
      loading: value === 'loading',
      error: value === 'error'
    })
  }

  render = () => this.props.children({
    fetchStates,
    onRefetchClick: this.handleRefetchClick,
    onDataChange: this.handleDataChange,
    onFetchStateChange: this.handleFetchStateChange,
    ...this.state
  })
}
