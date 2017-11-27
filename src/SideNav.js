import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {
  Text,
  Ul,
  Li
} from '@compositor/mono'

import { nav } from './constants'
import Box from './Box'

const toggleSection = (update, section) =>
  update(state => {
    const newState = Object.assign({}, state)
    newState.sideNav.currSection = section

    return newState
  })

const SideNav = ({
  currSection,
  currPage,
  update,
  theme
}) =>
  <Box
    w={1}
    mr={[0, 2, 3]}
    borderRight
    borderWidth={1}
    borderColor='gray1'
    style={{
      width: '200px',
      position: 'fixed',
      minHeight: '100%'
    }}
    children={Object.keys(nav).map(section =>
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
              children={nav[section].map(page =>
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

export default SideNav
