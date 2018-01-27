import React, { Component } from 'react'

import { titleize } from './util'

import Box from './Box'
import {
  Link,
  Caps
} from '../library'

export default ({ navGroups = [] }) =>
  <Box
    w={[0, 200, 250]}
    flex='none'
    p={3}
  >
    {Object.keys(navGroups).map(group => {
      const routes = navGroups[group]
      const name = group

      return (
        <Box pt={1} pb={3} key={name}>
          <Box pb={2}>
            <Caps>{titleize(name)}</Caps>
          </Box>

          {routes.map(route =>
            <Box>
              <Link
                pb={2}
                color='black'
                key={route.name}
                href={route.route}
                children={titleize(route.name)}
              />
            </Box>
          )}
        </Box>
      )
    })}
  </Box>
