const fonts = require('./fonts.json')

const apiURL = 'https://fonts.googleapis.com/css'

const getName = stack => stack
  .split(',')[0]
  .replace(/["']/g, '')

const plusify = name => name.replace(/\s/g, '+')

const isWebfont = name => fonts.includes(getName(name))

const getURL = (stack, weights = []) => {
  const name = getName(stack)
  if (!isWebfont(name)) return false

  const family = weights.length
    ? [ plusify(name), ...weights ].join(':')
    : plusify(name)

  return [
    apiURL,
    '?family=',
    family
  ].join('')
}

const getLinkTag = (stack, weights) => {
  const fontURL = getURL(stack, weights)
  if (!fontURL) return false

  return `<link rel='stylesheet' href='${fontURL}'>`
}

module.exports = {
  fonts,
  apiURL,
  plusify,
  isWebfont,
  getURL,
  getLinkTag
}
