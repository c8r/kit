import React, { Component } from 'react'

import Box from './Box'

const NavGroupInner = ({ routes = [] }) =>
  routes.map(route =>
    <a
      key={route}
      href={route.route}
      children={route.name}
    />
  )

class NavGroup extends Component {
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
            <NavGroupInner routes={routes} />
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
    {Object.keys(navGroups).map(group => {
      const routes = navGroups[group]

      return (
        <NavGroup
          key={group}
          name={group}
          routes={routes}
        />
      )
    })}
  </Box>
