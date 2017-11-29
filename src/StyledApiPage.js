import React from 'react'

import connect from 'refunk'
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

  return (
    <Layout>
      <Heading>{c.name} Styled API</Heading>
      <Text>
        The border radius and box shadow are configurable.
      </Text>

      {xProduct(c.api, theme).map((props, i) =>
        <Component
          key={i}
          children='Hello'
          style={{
            boxShadow: props.shadow,
          }}
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
