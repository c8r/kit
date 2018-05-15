import React, { Fragment } from 'react'
import { Provider } from 'rebass'

import { theme, Header, Footer } from '../components'

export default Component => props => (
  <Provider theme={theme}>
    <Fragment>
      <Header />
      <main {...props} />
      <Footer />
    </Fragment>
  </Provider>
)
