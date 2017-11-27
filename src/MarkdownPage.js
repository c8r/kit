import React from 'react'

import * as md from './md'
import Markdown from './Markdown'
import Layout from './Layout'

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
    <Markdown
      children={getMarkdown(page)}
    />
  </Layout>

export default MarkdownPage
