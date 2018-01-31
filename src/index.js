import React from 'react'
import getMetadata from './get-metadata'

import theme from '../theme.json'
import Box from './Box'
import Flex from './Flex'
import Styleguide from './Styleguide'

import {
  Title,
  Heading,
  Subhead,
  LongText,
  Link
} from '../library'

import { extendDefaultProps as ext } from './util'

ext(Title, { my: 3 })
ext(Heading, { mt: 4, mb: 3 })
ext(Subhead, { mt: 4, mb: 3 })
ext(LongText, { mt: 0, mb: 3 })

const Example = props =>
  <Styleguide
    Components={{
      a: Link,
      p: LongText,
      h1: Title,
      h2: Heading,
      h3: Subhead,
      theme // TODO: We shouldn't need to pass theme in here
    }}
    scope={{ Box, Flex, props, theme }}
    {...props}
  />

Example.getInitialProps = async props => {
  const metadata = await getMetadata(props)
  const env = {
    DEBUG: process.env.DEBUG,
  }

  return Object.assign({}, props, env, { styleguide: metadata })
}

export default Example
