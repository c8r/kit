const { generateJSReferences } = require('mini-html-webpack-plugin')

module.exports = ({
  html = '',
  css = '',
  js,
  publicPath,
  title = 'kit',
  meta = [],
  links = [],
  static: staticBuild
}) =>
  `<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<title>${title}</title>
${meta
    .map(({ name, content }) => `<meta name='${name}' content='${content}'>`)
    .join('\n')}
${links
    .map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`)
    .join('\n')}
<style>*{box-sizing:border-box}body{margin:0}</style>
${css}
</head>
<div id=root>${html}</div>
${staticBuild ? '' : generateJSReferences(js, publicPath)}
`
