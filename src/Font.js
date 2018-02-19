import React from 'react'
import webfont from '@compositor/webfont'

class Font extends React.Component {
  static defaultProps = {
    fontFamily: 'system-ui, sans-serif',
    lineHeight: 1.5,
    color: '#000'
  }

  render () {
    const { fontFamily, lineHeight, color, ...props } = this.props
    const url = webfont.getURL(fontFamily)

    return (
      <React.Fragment>
        {url && <link rel='stylesheet' href={url} />}
        <div
          {...props}
          style={{
            fontFamily,
            lineHeight,
            color,
            '--color': color
          }}
        />
      </React.Fragment>
    )
  }
}

export default Font
