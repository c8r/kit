import React from 'react'

import connect from 'refunk'
import humanizeList from 'humanize-list'
import { xProduct } from 'styled-api'

import {
  Heading,
  Text
} from '@compositor/mono'

import Layout from './Layout'
import ComponentEditor from './ComponentEditor'

const ComponentPage = ({
  match: {
    params: {
      component
    }
  },
  components,
  theme,
  library,
  editors
}) => {
  const c = components.find(c => c.name.toLowerCase() === component)

  const Component = library[c.name]

  if (!c.api) {
    return (
      <Layout>
        <Heading>{c.name} does not have a styled api</Heading>
      </Layout>
    )
  }

  return (
    <Layout>
      <Heading>{c.name} Styled API</Heading>
      <Text>
        {humanizeList(Object.keys(c.api))}
        {Object.keys(c.api).length > 1 ? 'are' : 'is'} configurable
      </Text>

      {xProduct(c.api, theme).map((props, i) =>
        <Component
          key={i}
          children='Hello'
          m={2}
          p={4}
          {...c.props}
          {...props}
        />
      )}

    </Layout>
  )
}

export default connect(ComponentPage)
