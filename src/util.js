const toRoute = path => path.toLowerCase()
const toSrcPath = (docsDir, path) =>
  path
    .replace(/\md$/, 'js')
    .replace(docsDir, 'src')
    .replace('components/', '')

export {
  toRoute,
  toSrcPath
}
