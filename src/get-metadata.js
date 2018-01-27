import path from 'path'
import { readFileSync } from 'fs'
import styledParser from 'styled-parser'
import { parse as docGen } from 'react-docgen'
import glob from '@compositor/globb'

import {
  log,
  toSrcPath
} from './util'
import {
  DIR,
  LIBRARY
} from './constants'

export default async ({
  dir = DIR,
  library = LIBRARY
}) => {
  const files = await glob(dir, {
    filter: /\.(js|jsx|md)$/i
  })

  const components = files
    .map(file => {
      log(`Processing metadata for ${file}`)

      const content = readFileSync(file, 'utf8')
      const parsedPath = path.parse(file)
      const name = parsedPath.name
      const route = path.join(parsedPath.dir, name).replace(dir, '')

      const srcPath = toSrcPath(dir, file)

      let src = null
      try {
        src = readFileSync(srcPath, 'utf8')
      } catch (e) {
        return {
          name,
          content,
          file,
          parsedPath,
          route,
          component: false
        }
      }

      const styled = styledParser(src)

      let info = null
      try {
        info = docGen(src)
      } catch (e) {
        log(`react-docgen couldn't parse ${file}`)
      }

      return {
        name: parsedPath.name,
        file,
        content,
        srcPath,
        parsedPath,
        src,
        styled,
        route,
        info
      }
    })
    .reduce((acc, curr) =>
      Object.assign(acc, { [curr.name]: curr })
    , {})

  return { components }
}
