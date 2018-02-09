import React from 'react'
import { Markdown } from '@compositor/markdown'

import StyleguideProvider from './StyleguideProvider'

export default ({
  Content,
  ...props
}) =>
  <StyleguideProvider
    styleguide={props.styleguide}
    children={Content
      ? <Content {...props} />
      : <Markdown {...props} />
    }
  />
