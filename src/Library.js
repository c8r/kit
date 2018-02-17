import React from 'react'
import nano from 'nano-style'
import {
  CHANNEL,
  contextTypes
} from './constants'
import Grid from './Grid'
import Example from './Example'

const Root = nano('div')({
  display: 'flex',
  alignItems: 'flex-start',
  minHeight: '100vh'
})

const Main = nano('div')({
  flex: '1 1 auto'
})

const Sidebar = nano('div')({
  width: '256px'
})

class Library extends React.Component {
  static contextTypes = contextTypes

  render () {
    const { update, component } = this.context[CHANNEL]
    const children = React.Children.toArray(this.props.children)
    const {
      width,
      height,
      gap
    } = this.props

    const examples = children.filter(c => c.type === Example)
    const navChild = children.find(c => c.type === Library.Nav)
    const nav = navChild ? React.cloneElement(navChild, { update, examples }) : false

    const example = component ? examples.find(c => c.props.name === component) : false

    return (
      <Root>
        {nav}
        {example ? (
          <Main>
            {example.props.children}
          </Main>
        ) : (
          <Main>
            <Grid
              width={width}
              height={height}
              gap={gap}>
              {examples}
            </Grid>
          </Main>
        )}
      </Root>
    )
  }
}

Library.Nav = class extends React.Component {
  render () {
    const { update } = this.props
    const examples = this.props.examples
      .map(c => c.props.name)

    return (
      <Sidebar>
        <a href='#' onClick={e => update({ component: null })}>
          Components
        </a>
        {examples.map(name => (
          <div key={name}>
            <a href={'#' + name}
              onClick={e => {
                update({ component: name })
              }}>
              {name}
            </a>
          </div>
        ))}
      </Sidebar>
    )
  }
}

export default Library
