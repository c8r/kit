import React from 'react'
import connect from 'refunk'

import {
  H1,
  Container
} from '@compositor/mono'

import ComponentEditor from './ComponentEditor'

const Styleguide = ({
  components,
  library,
  editors,
  config,
  theme
}) =>
  <Container>
    <H1 children='Components' />

    {components.map(c =>
      <ComponentEditor
        key={c.name}
        theme={theme}
        component={c}
        library={library}
        editor={editors[c.name]}
      />
    )}
  </Container>

export default connect(Styleguide)
