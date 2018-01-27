const log = msg => process.env.VERBOSE && console.log(msg)
const toSrcPath = (docsDir, path) =>
  path
    .replace(/\md$/, 'js')
    .replace(docsDir, 'src')
    .replace('components/', '')

// Adapted from: https://github.com/sindresorhus/titleize/blob/master/index.js
const titleize = str => str
  .toLowerCase()
  .replace(/(?:^|\s|-)\S/g, m => m.toUpperCase())
  .replace(/(-|_)/g, ' ')

export {
  log,
  titleize,
  toSrcPath
}
