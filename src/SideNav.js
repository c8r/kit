import React, { Component } from 'react'

import { Link } from 'react-router-dom'

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
  update
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
      <Box mt={0} key={section}>
        <p
          mt={0}
          children={section}
          onClick={() => toggleSection(update, section)}
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
