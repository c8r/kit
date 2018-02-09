import React from 'react'
import { Markdown } from '@compositor/markdown'

import StyleguideProvider from './StyleguideProvider'

export default ({
  styleguide,
  componentName,
  Content,
  ...props
}) =>
  <StyleguideProvider
    styleguide={styleguide}
    componentName={componentName}
    children={Content
      ? <Content {...props} />
      : <Markdown {...props} />
    }
  />
