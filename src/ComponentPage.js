import React from 'react'

import connect from 'refunk'

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
  editors,
  sgTheme
}) => {
  const c = components.find(c => c.name.toLowerCase() === component)

  return (
    <Layout>
      <Heading
        my={0}
        py={4}
        pl={4}
        style={{
          borderBottom: `1px solid ${sgTheme.colors.gray1}`
        }}
        children={c.name}
      />

      {c.description && (
        <Text
          my={0}
          py={3}
          pl={4}
          color={sgTheme.colors.gray5}
          style={{
            lineHeight: 1.5,
            width: '32em'
          }}
          children={c.description}
        />
      )}

      <ComponentEditor
        key={c.name}
        theme={theme}
        component={c}
        library={library}
        components={components}
        editor={editors[c.name]}
      />
    </Layout>
  )
}

export default connect(ComponentPage)
