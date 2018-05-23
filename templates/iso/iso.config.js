const Rebass = require('rebass')
const Kit = require('@compositor/kit')

module.exports = {
  components: { Rebass, ...Kit },
  theme: Rebass.theme
}
