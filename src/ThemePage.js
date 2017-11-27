import React from 'react'

import connect from 'refunk'

import * as themes from './theme'
import Layout from './Layout'

const ThemePage = ({
  match: {
    params: {
      theme
    }
  },
  ...props
}) => {
  const Component = themes[theme]

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

export default connect(ThemePage)
