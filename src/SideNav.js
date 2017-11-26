import React, {
  Component
} from 'react'

import {
  Link
} from 'react-router-dom'

import styled from 'glamorous'

import {
  nav
} from './constants'

import Box from './Box'

const SideNav = ({
  currSection,
  currPage,
  update
}) =>
  <Box
    w={1}
    borderRight
    borderColor='gray1'
    children={Object.keys(nav).map(section =>
      <Box key={section}>
        <p
          children={section}
          onClick={() => update(state => {
            const newState = Object.assign({}, state)
            newState.sideNav.currSection = section

            return newState
          })}
        />
        {section === currSection && (
          <ul
            children={nav[section].map(page =>
              <li key={page.to}>
                <Link
                  {...page}
                />
              </li>
            )}
          />
        )}
      </Box>
    )}
  />

export default SideNav
