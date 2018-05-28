import React from 'react'
import Editor from '@compositor/react-editor'
import { Fetch, Debug } from '../src'

export default props => (
  <Fetch url="https://reqres.in/api/users?page=2">
    {
      ({
        onRefetchClick,
        onDataChange,
        onFetchStateChange,
        fetchState,
        fetchStates,
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
          {data && data.page}
          <Debug log>{data}</Debug>
          {editedData && (
            <Editor
              value={JSON.stringify(editedData, null, 2)}
              onChange={onDataChange}
              lang='jsx'
            />
          )}
          <button onClick={onRefetchClick}>Refetch</button>
          <select
            onChange={onFetchStateChange}
            children={fetchStates.map(state =>
              <option
                key={state}
                value={state}
                selected={state === fetchState}
                children={state}
              />
            )}
          />
        </React.Fragment>
      )
    }
  </Fetch>
)
