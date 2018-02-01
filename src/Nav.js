import React, { Component } from 'react'

import Box from './Box'
import { ROOT_LEVEL_FILE } from './constants'
import { titleize } from './util'
import {
  Link
} from '../library'


export default ({ navGroups = [] }) =>
  <Box
    w={[0, 200, 250]}
    flex='none'
    p={3}
  >
    {Object.keys(navGroups).map(group => {
      if (group === ROOT_LEVEL_FILE) return null

      const routes = navGroups[group]
      const name = group

      return (
        <Box pt={1} pb={3} key={name}>
          <Box pb={2}>
            {titleize(name)}
          </Box>

          {routes.map(route =>
            <Box
              pb={1}
              key={route.name}
            >
              <Link
                color='midgray'
                href={route.route}
                children={titleize(route.name)}
              />
            </Box>
          )}
        </Box>
      )
    })}

    {navGroups[ROOT_LEVEL_FILE] && navGroups[ROOT_LEVEL_FILE].map(route => {
      if (route.name === 'introduction') return null

      return (
        <Box pt={1} pb={3} key={route.name}>
          <Box pb={2}>
            <Link
              color='black'
              href={route.route}
              children={titleize(route.name)}
            />
          </Box>
        </Box>
      )
    })}
  </Box>
