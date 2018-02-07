import React from 'react'
import { Markdown } from '@compositor/markdown'

export default ({
  Content,
  ...props
}) =>
  Content
    ? <Content {...props} />
    : <Markdown {...props} />
