import { readFileSync } from 'fs'
import styledParser from 'styled-parser'
import { parse as docGen} from 'react-docgen'
import glob from '@compositor/globb'

import {
  toRoute,
  toSrcPath
} from './util'

export default async (dir, scope, opts) => {
  const files = await glob(dir, {
    filter: /\.(js|jsx|md)$/i
  })

  return files
    .map(file => {
      const content = readFileSync(file, 'utf8')
      const srcPath = toSrcPath(dir, file)
      const src = readFileSync(srcPath, 'utf8')
      const styled = styledParser(src)
      const route = toRoute(file)

      let info = null
      try {
        info = docGen(src)
      } catch (e) {
        console.log(`Error parsing component metadata for ${file}`)
      }

      console.log(`Processed ${file}`)

      return {
        file,
        content,
        srcPath,
        src,
        styled,
        route,
        info
      }
    })
}
