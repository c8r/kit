import path from 'path'
import { configure } from '@storybook/react'
import loadExamples from './index'

const req = require.context(DIRNAME, false, /\.js$/)

const opts = {
  name: KITNAME
}

const load = () => {
  const examples = req
    .keys()
    .map(key => ({
      name: path.basename(key, path.extname(key)),
      module: req(key).default || req(key)
    }))
    .map(example =>
      Object.assign(example, {
        element:
          typeof example.module === 'function'
            ? example.module()
            : example.module
      })
    )
  loadExamples(examples, opts)
}

configure(load, module)
