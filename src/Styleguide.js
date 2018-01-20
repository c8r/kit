import React from 'react'

import DefaultLayout from './Layout'
import DefaultContent from './DefaultContent'
import SGFlex from './Flex'
import SGBox from './Box'
import SGLiveEditor from './LiveEditor'

const defaultScope = {
  Box,
  Flex,
  LiveEditor
}

export default ({
  scope,
  Component,
  Content = DefaultContent,
  Layout = DefaultLayout,
  ...props
}) => {
  const fullScope = Object.assign({}, defaultScope, scope)

  return (
    <DefaultLayout>
      <Content
        Component={Component}
        scope={fullScope}
        {...props}
      />
    </DefaultLayout>
  )
}
