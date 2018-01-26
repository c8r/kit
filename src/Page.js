import React from 'react'
import fs from 'fs'
import XRay from 'react-x-ray'
import { Markdown } from '@compositor/markdown'

import LiveEditor from './LiveEditor'
import * as components from '../library'

const Page = ({ text }) =>
  <Markdown
    LiveEditor={LiveEditor}
    Component={components.Button}
    components={components}
    scope={Object.assign({}, components, { XRay })}
    text={text}
  />

Page.getInitialProps = () => {
  return {
    text: fs.readFileSync('./docs/components/Box.md', 'utf8')
  }
}

export default Page
