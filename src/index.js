import React from 'react'
import getMetadata from './metadata'

import theme from '../theme.json'
import Box from './Box'
import Flex from './Flex'
import Debug from './Debug'
import Styleguide from './Styleguide'

import {
  Title,
  Heading,
  Subhead,
  LongText,
  Link,
  Code,
  Li
} from '../library'

import { extendDefaultProps as ext } from './util'

ext(Title, { my: 3 })
ext(Heading, { mt: 4, mb: 3 })
ext(Subhead, { mt: 4, mb: 3 })
ext(LongText, { mt: 0, mb: 3 })
ext(Code, { f: 1 })

const Example = props =>
  <Styleguide
    Components={{
      a: Link,
      p: LongText,
      h1: Title,
      h2: Heading,
      h3: Subhead,
      code: Code,
      li: Li,
      theme // TODO: We shouldn't need to pass theme in here
    }}
    scope={{ Box, Flex, Debug, props, theme }}
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
