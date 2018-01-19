import React from 'react'
import connect from 'refunk'

import LiveEditor from './LiveEditor'

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
    <div>
      <h1>{c.name}</h1>
      <p>{c.description}</p>

      <LiveEditor
        key={c.name}
        theme={theme}
        component={c}
        library={library}
        components={components}
        editor={editors[c.name]}
      />
    </div>
  )
}

export default connect(ComponentPage)
