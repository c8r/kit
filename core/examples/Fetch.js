import React from 'react'
import { Fetch, Debug } from '../src'

export default props => (
  <Fetch url="https://reqres.in/api/users?page=2">
    {
      ({
        onDataChange,
        onFetchStateChange,
        fetchState,
        loading,
        error,
        editedData,
        data
      }) => (
        <React.Fragment>
          <h1>{fetchState}</h1>
          <hr />
          <h1>Loading</h1>
          <Debug>{loading}</Debug>
          <hr />
          <h1>Error</h1>
          <Debug>{error}</Debug>
          <hr />
          <h1>Data</h1>
          <Debug>{data}</Debug>
          {data &&
          <textarea
            onChange={onDataChange}
            value={JSON.stringify(editedData)}
          />
        }
        </React.Fragment>
      )
    }
  </Fetch>
)
