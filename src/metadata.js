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
  LIBRARY,
  ROOT_LEVEL_FILE
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
        log(`  no src file found for ${file}`)
        return {
          name,
          content,
          file,
          parsedPath,
          route,
          component: false
        }
      }

      let styled = null
      try {
        styled = styledParser(src)
      } catch (e) {
        log(`  styled-parser couldn't parse ${file}`)
      }

      let info = null
      try {
        info = docGen(src)
      } catch (e) {
        log(`  react-docgen couldn't parse ${file}`)
      }

      const Content = parsedPath.ext === '.js'
        ? require(file)
        : null

      return {
        name: parsedPath.name,
        Content,
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

  const nav = Object
    .keys(components)
    .reduce((acc, curr) => {
      const obj = components[curr]
      const group = obj.parsedPath.dir.replace(dir, '').replace(/^\//, '') || ROOT_LEVEL_FILE

      acc[group] = acc[group] || []
      acc[group].push({
        group,
        name: obj.name,
        route: obj.route
      })

      return acc
    }, {})

  return { components, nav }
}
