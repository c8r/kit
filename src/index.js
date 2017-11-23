import React from 'react'

import {
  renderToString
} from 'react-dom/server'

import {
  H1,
  Container
} from '@compositor/mono'

module.exports = ({ config, theme }) =>
  renderToString(
    <Container
      children={config.components.map(c =>
        <H1
          key={c.name}
          children={c.name || 'lolzzzz'}
        />
      )}
    />
  )
