import React, { Component, Fragment } from 'react'
import { Editor } from 'react-live'
import fetch from 'isomorphic-fetch'

import { Box, Divider, Label, Select } from './ui'

const FetchEditor = ({
  onDataChange,
  onFetchStateChange,
  fetchState,
  data = {}
}) => {
  const fetchStates = ['loading', 'fetched', 'error']
  const code = JSON.stringify(data, null, 2)

  return (
    <Fragment>
      <Divider />
      <Box p={3}>
        <Label>Fetch State</Label>
        <Select
          mt={1}
          value={fetchState}
          onChange={onFetchStateChange}
          children={fetchStates.map(state =>
            <option
              key={state}
              value={state}
              children={state}
            />
          )}
        />
      </Box>
      <Divider />
      <Editor
        code={code}
        onChange={onDataChange}
        lang='jsx'
      />
    </Fragment>
  )
}

export default class Fetch extends Component {
  static defaultProps = {
    renderEditor: FetchEditor
  }

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
        // this might be duplicative state?
        code: JSON.stringify(data, null, 2),
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

  handleDataChange = value => {
    if (this.state.fetching) {
      return
    }

    try {
      const data = JSON.parse(value)
      this.setState({ data })
    } catch (e) {
      this.setState({ code: value })
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

  render = () => (
    <Fragment>
      {this.props.children(this.state)}
      {this.props.renderEditor({
        onDataChange: this.handleDataChange,
        onFetchStateChange: this.handleFetchStateChange,
        ...this.state
      })}
    </Fragment>
  )
}
