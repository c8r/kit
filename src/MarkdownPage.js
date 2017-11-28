import React from 'react'

import * as md from './md'
import Markdown from './Markdown'
import Layout from './Layout'
import Box from './Box'

const getMarkdown = page => md[page] || `
# 404

This page cannot be found
`

const MarkdownPage = ({
  match: {
    params: {
      page
    }
  }
}) =>
  <Layout>
    <Box p={4}>
      <Markdown
        style={{ lineHeight: 1.5 }}
        children={getMarkdown(page)}
      />
    </Box>
  </Layout>

export default MarkdownPage
