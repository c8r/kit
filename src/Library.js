import React from 'react'
import nano from 'nano-style'
import {
  CHANNEL,
  contextTypes
} from './constants'
import { Grid } from './ui'
import Example from './Example'

const height = ({ height }) => height ? ({ height }) : null

const Root = nano('div')({
  display: 'flex',
  alignItems: 'flex-start',
  minHeight: '100vh'
})

const Main = nano('div')({
  flex: '1 1 auto',
  overflowY: 'auto',
  padding: '8px',
  WebkitOverflowScrolling: 'touch'
}, height)

const Sidebar = nano('div')({
  width: '192px',
  flex: 'none',
  padding: '8px',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch'
}, height)

const NavItem = nano('a')({
  display: 'block',
  padding: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '4px',
  WebkitUserSelect: 'none',
  userSelect: 'none',
}, props => props.active ? ({
  color: 'white',
  backgroundColor: 'var(--color, black)'
}) : null)


class Library extends React.Component {
  static contextTypes = contextTypes

  render () {
    const { update, component } = this.context[CHANNEL]
    const children = React.Children.toArray(this.props.children)
    const {
      height = '100vh',
      card = {}
    } = this.props

    const examples = children.filter(c => c.type === Example)
    const navChild = children.find(c => c.type === Library.Nav)
    const nav = navChild
      ? React.cloneElement(navChild, { height, update, examples, component })
      : false

    const example = component ? examples.find(c => c.props.name === component) : false

    return (
      <Root>
        {nav}
        {example ? (
          <Main height={height}>
            {example.props.children}
          </Main>
        ) : (
          <Main height={height}>
            <Grid {...card}>
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
    const { update, height, component } = this.props
    const examples = this.props.examples
      .map(c => c.props.name)

    return (
      <Sidebar height={height}>
        <NavItem
          href='#'
          onClick={e => update({ component: null })}>
          Components
        </NavItem>
        {examples.map(name => (
          <NavItem
            key={name}
            href={'#' + name}
            active={component === name}
            onClick={e => {
              update({ component: name })
            }}>
            {name}
          </NavItem>
        ))}
      </Sidebar>
    )
  }
}

export default Library
