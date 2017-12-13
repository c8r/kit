import React from 'react'
import { Link } from 'react-router-dom'
import isBlank from 'is-blank'

import pluckExtensions from '@compositor/pluck-extension-tree'
import { Div, H4 } from '@compositor/mono'

export default ({ component, components }) => {
  const extensions = pluckExtensions(component.name, components)

  if (isBlank(extensions) && isBlank(component.imports)) {
    return null
  }

  return (
    <Div>
      {component.imports && (
        <Div>
          <H4 fontSize={1} mb={2}>Imports</H4>
          {component.imports.map(comp =>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to={`/components/${comp.toLowerCase()}`}
            >
              <code
                key={comp}
                children={comp}
                style={{ display: 'block', lineHeight: 1.5 }}
              />
            </Link>
          )}
        </Div>
      )}

      {extensions && (
        <Div>
          <H4 fontSize={1} mb={2}>Imported by</H4>
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
      )}
    </Div>
  )
}
