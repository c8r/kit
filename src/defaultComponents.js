import Box from './Box'
import Nav from './Nav'
import Flex from './Flex'
import Page from './Page'
import Debug from './Debug'
import Layout from './Layout'
import Docgen from './Docgen'
import LiveEditor from './LiveEditor'
import ColorPalette from './ColorPalette'
import StyledSystem from './StyledSystem'

import { extendDefaultProps as ext } from './util'

import {
  theme,
  Title,
  Heading,
  Subhead,
  LongText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Code,
  Pre,
  Li,
  Ul,
  Ol
} from '../library'


ext(Title, { my: 3 })
ext(Heading, { mt: 4, mb: 3 })
ext(Subhead, { mt: 4, mb: 3 })
ext(LongText, { mt: 0, mb: 3 })
ext(Code, { f: 1 })
ext(Pre, { f: 1 })
ext(Table, { mb: 3 })

// Markdown mapping
const a = Link
const p = LongText
const h1 = Title
const h2 = Heading
const h3 = Subhead
const code = Code
const pre = Pre
const li = Li
const ul = Ul
const ol = Ol
const table = Table
const thead = Thead
const tbody = Tbody
const tr = Tr
const th = Th
const td = Td

export {
  theme,
  Title,
  Heading,
  Subhead,
  LongText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Code,
  Pre,
  Li,
  Ul,
  Ol,
  Box,
  Flex,
  Nav,
  Debug,
  Layout,
  Page,
  Docgen,
  LiveEditor,
  ColorPalette,
  StyledSystem,
  a,
  p,
  h1,
  h2,
  h3,
  code,
  pre,
  li,
  ul,
  ol,
  table,
  thead,
  tbody,
  tr,
  th,
  td
}
