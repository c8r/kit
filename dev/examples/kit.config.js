import * as Rebass from 'rebass'
import { Link } from 'react-router-dom'
import { Consumer as Refunk } from 'refunk'

const components = Object.assign({}, Rebass, {
  Link,
  Refunk,
  h2: Rebass.Heading,
  h3: Rebass.Heading
})

const theme = Rebass.theme

export default {
  components,
  theme
}
