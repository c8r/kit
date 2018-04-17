import React from 'react'
import { render } from 'react-dom'
import nano from 'nano-style'

class Frame extends React.Component {
  static defaultProps = {
    zoom: 1,
    width: '100%',
    height: '100%',
    css: 'body{font-family:system-ui,sans-serif;line-height:1.5}'
  }

  constructor() {
    super()

    this.doc = null
    this.win = null
    this.div = null

    this.getSrc = () => {
      const { zoom = 1, css = '' } = this.props
      return `<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;zoom:${zoom}} ${css}</style>
<div id='app'></div>`
    }

    this.onLoad = e => {
      this.doc = this.root.contentDocument
      this.win = this.root.contentWindow
      this.update(this.props)
    }

    this.update = ({ children }) => {
      if (!this.doc) return
      const div = this.doc.getElementById('app')
      render(children, div)
    }
  }

  componentWillReceiveProps(next) {
    if (next.children !== this.props.children) {
      this.update(next)
    }
  }

  render() {
    const { width, height, zoom, children } = this.props

    return (
      <iframe
        ref={ref => (this.root = ref)}
        style={{
          width,
          height,
          zoom,
          pointerEvents: 'none',
          display: 'block',
          margin: 0,
          overflow: 'scroll',
          backgroundColor: '#fff',
          opacity: !!children ? 1 : 0.25,
          border: 0
        }}
        srcDoc={this.getSrc()}
        scrolling="yes"
        onLoad={this.onLoad}
      />
    )
  }
}

export default Frame
