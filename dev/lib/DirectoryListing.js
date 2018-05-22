// directory listing for 404
import React from 'react'
import { Link } from 'react-router-dom'

export default ({ routes = [] }) => (
  <React.Fragment>
    <h1 style={{ paddingLeft: '1em', paddingRight: '1em' }}>Components</h1>
    <ul>
      {routes.map(route => (
        <li key={route.name}>
          <Link to={route.path} children={route.key} />
        </li>
      ))}
    </ul>
  </React.Fragment>
)
