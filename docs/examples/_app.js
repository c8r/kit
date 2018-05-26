import React from 'react'
import { Provider } from 'rebass'

export default ({ render }) =>
  <Provider>
    {render()}
  </Provider>
