import React from 'react'

import connect from 'refunk'

import * as md from './md'
import Markdown from './Markdown'
import Layout from './Layout'

const getMarkdown = page => md[page] || `
# 404

This page hasn't been written yet
`

const MarkdownPage = ({ match }) =>
  <Layout>
    <Markdown>
      {getMarkdown(match.params.page)}
    </Markdown>
  </Layout>

export default connect(MarkdownPage)
