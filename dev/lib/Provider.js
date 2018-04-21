import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const get = (obj, path, fallback) => path.split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj) || fallback
const themeGet = (keys, fallback) => props => get(props.theme, keys, fallback)

const Root = styled.div`
  font-family: ${themeGet('fonts.sans', 'system-ui, sans-serif')};
  line-height: ${themeGet('lineHeight', 1.5)};
  color: ${themeGet('colors.text', '#000')};
`

class Provider extends React.Component {
  render () {
    const { components, theme, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Root>
          {children}
        </Root>
      </ThemeProvider>
    )
  }
}

Provider.defaultProps = {
  components: {},
  theme: {}
}

export default Provider
