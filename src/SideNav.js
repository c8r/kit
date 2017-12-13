import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import isBlank from 'is-blank'
import isPresent from 'is-present'

import {
  Text,
  Ul,
  Li
} from '@compositor/mono'

import { nav } from './constants'
import Box from './Box'

const toNavObject = component => ({
  to: `/components/${component.name.toLowerCase()}`,
  children: component.name
})

const toggleSection = (update, section) =>
  update(state => {
    const newState = Object.assign({}, state)
    const currSection = newState.sideNav.currSection

    newState.sideNav.currSection = currSection === section ? null : section

    return newState
  })

const SideNav = ({
  components = [],
  currSection,
  currPage,
  update,
  theme = { colors: {} }
}) => {
  const componentNav = {
    Primitives: components.filter(c => isBlank(c.imports)).map(toNavObject),
    Composites: components.filter(c => isPresent(c.imports)).map(toNavObject)
  }

  const fullNav = Object.assign({}, nav, componentNav)

  return (
    <Box
      w={200}
      pt={3}
      mr={[0, 2, 3]}
      borderRight
      borderWidth={1}
      borderColor={theme.colors.gray1}
      style={{
        position: 'fixed',
        height: '100%'
      }}
    >
      <Box
        style={{
          height: '100%',
          overflow: 'auto'
        }}
        children={Object.keys(fullNav).map(section =>
          <Box
            mt={0}
            py={3}
            key={section}
            style={{
              cursor: 'pointer'
            }}
          >
            <nav>
              <Text
                my={0}
                px={3}
                fontWeight={600}
                children={section}
              />
                <Ul
                  pt={1}
                  children={fullNav[section].map(page =>
                    <Li
                      px={4}
                      py={1}
                      key={page.to}
                    >
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: theme.colors.gray5
                        }}
                        {...page}
                      />
                    </Li>
                  )}
                />
            </nav>
          </Box>
        )}
      />
    </Box>
  )
}

export default SideNav
