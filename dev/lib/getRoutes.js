import path from 'path'
import React from 'react'

const { filename } = OPTIONS
const index = filename
  ? path.basename(filename, path.extname(filename))
  : 'index'

const withCatch = Component => class extends React.Component {
  state = { err: null }

  static getDerivedStateFromProps (props, state) {
    if (!state.err) return null
    return { err: null }
  }

  componentDidCatch (err) {
    this.setState({ err })
  }

  render () {
    const { err } = this.state
    if (err) {
      return (
        <pre
          children={err.toString()}
          style={{
            fontFamily: 'Menlo, monospace',
            padding: 32,
            color: 'white',
            backgroundColor: 'red'
          }}
        />
      )
    }

    return <Component {...this.props} />
  }
}

const getRoutes = req =>
  req.keys().map(key => {
    const name = path.basename(key, path.extname(key))
    const mod = req(key)
    const pathname = name === index ? '/' : '/' + name
    const component = mod.default || mod

    return {
      key,
      name,
      exact: name === index,
      path: pathname,
      module: mod,
      props: mod.props || {},
      component,
    }
  })
  .filter(route => typeof route.component === 'function')
  .map(route => ({ ...route, component: withCatch(route.component) }))

export default getRoutes
