const log = msg => process.env.VERBOSE && console.log(msg)
const toSrcPath = (docsDir, path) =>
  path
    .replace(/\md$/, 'js')
    .replace(docsDir, 'src')
    .replace('components/', '')

export {
  log,
  toSrcPath
}
