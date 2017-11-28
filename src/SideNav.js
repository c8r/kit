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
    newState.sideNav.currSection = section

    return newState
  })

const SideNav = ({
  config,
  currSection,
  currPage,
  update,
  theme
}) => {
  const componentNav = {
    Primitives: config.components.filter(c => isBlank(c.imports)).map(toNavObject),
    Composites: config.components.filter(c => isPresent(c.imports)).map(toNavObject)
  }

  const fullNav = Object.assign({}, nav, componentNav)

  return (
    <Box
      w={200}
      mr={[0, 2, 3]}
      borderRight
      borderWidth={1}
      borderColor='gray1'
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
            borderColor='gray1'
            borderWidth={1}
            borderBottom
            key={section}
            style={{
              cursor: 'pointer'
            }}
          >
            <nav>
              <Text
                my={0}
                p={3}
                children={section}
                onClick={() => toggleSection(update, section)}
              />
              {section === currSection && (
                <Ul
                  py={3}
                  bg='gray0'
                  borderTop
                  borderWidth={1}
                  borderColor='gray1'
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
              )}
            </nav>
          </Box>
        )}
      />
    </Box>
  )
}

export default SideNav
