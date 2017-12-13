import React from 'react'
import { Link } from 'react-router-dom'
import isBlank from 'is-blank'

import pluckExtensions from '@compositor/pluck-extension-tree'
import { Div, H4 } from '@compositor/mono'

export default ({ component, components }) => {
  const extensions = pluckExtensions(component.name, components, { descendents: true })

  if (isBlank(extensions)) {
    return null
  }

  return (
    <Div>
      <H4 fontSize={1} mb={2}>Extended by</H4>
      {extensions.map(ext =>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
          to={`/components/${ext.name.toLowerCase()}`}
        >
          <code
            key={ext.name}
            children={ext.name}
            style={{ display: 'block', lineHeight: 1.5 }}
          />
        </Link>
      )}
    </Div>
  )
}
