import React from 'react'

import connect from 'refunk'

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

  return (
    <Layout>
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
