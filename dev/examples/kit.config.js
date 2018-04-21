const Rebass = require('rebass')
const { Link } = require('react-router-dom')
const { Consumer: Refunk } = require('refunk')

const components = Object.assign({}, Rebass, {
  Link,
  Refunk,

  h2: Rebass.Heading,
  h3: Rebass.Heading,
})

const theme = Rebass.theme

module.exports = {
  components,
  theme
}
