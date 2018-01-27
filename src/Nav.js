import React, { Component } from 'react'

import Box from './Box'

const NavSectionInner = (routes = []) =>
  routes.map(route =>
    <a
      key={route}
      href={route.href}
      children={route.name}
    />
  )

class NavSection extends Component {
  state = { isOpen: false }

  render () {
    const { isOpen } = this.state
    const { name, routes } = this.props

    return (
      <Box>
        <div>
          <div
            onClick={() => {
              this.setState({
                isOpen: !isOpen
              })
            }}
            children={name}
          />

          {isOpen && (
            <NavSectionInner routes={routes} />
          )}
        </div>
      </Box>
    )
  }
}

export default ({ navGroups = [] }) =>
  <Box
    w={[0, 200, 250]}
    flex='none'
  >
    {navGroups.map(group =>
      <NavGroup
        key={group.name}
        {...group}
      />
    )}
  </Box>
