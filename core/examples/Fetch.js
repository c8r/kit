import React from 'react'
import { Fetch, Debug } from '../src'

export default props => (
  <Fetch url="https://reqres.in/api/users?page=2">
    {
      ({
        onRefetchClick,
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
            rows={20}
            style={{ width: '100%'}}
            value={JSON.stringify(editedData, null, 2)}
          />
        }
        <button onClick={onRefetchClick}>Refetch</button>
        </React.Fragment>
      )
    }
  </Fetch>
)
