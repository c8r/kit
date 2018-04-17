require('dotenv').config()
const fs = require('fs')
const path = require('path')
const url = require('url')
const util = require('util')

const got = require('got')

const writeFile = util.promisify(fs.writeFile)

const apikey = process.env.GOOGLE_FONTS_API_KEY

const base = url.parse('https://www.googleapis.com/webfonts/v1/webfonts')
const endpoint = url.format(Object.assign({}, base, {
  query: {
    key: apikey,
    sort: 'popularity'
  }
}))

const getData = async () => {
  const response = await got(endpoint)
  const body = await response.body
  const data = JSON.parse(body)
  const fonts = data.items.map(item => item.family)
  console.log(`got ${fonts.length} webfonts`)
  const json = JSON.stringify(fonts, null, 2)
  const filename = path.join(__dirname, 'fonts.json')
  const err = await writeFile(filename, json)
  console.log('fonts.json written')
}

getData()
  .then(res => {
    console.log('done')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
