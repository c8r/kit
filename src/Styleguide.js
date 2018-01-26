import React from 'react'

import DefaultLayout from './Layout'

const Styleguide = ({
  docsSrc = 'doc',
  componentsSrc = 'src',
  Components
}) => {
  const fullScope = Object.assign({}, defaultScope, scope)

  return (
    <DefaultLayout>
      <Content
        Component={Component}
        scope={fullScope}
        {...props}
      />
    </DefaultLayout>
  )
}
