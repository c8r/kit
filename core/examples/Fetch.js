import React from 'react'
import Editor from '@compositor/react-editor'

import { Fetch, Debug } from '../src'

const Error = () => <h1>Error</h1>
const Loading = () => <h1>Loading</h1>
const Empty = () => <h1>No team members</h1>

export default props => (
  <Fetch url="https://compositor.fyi">
    {
      ({
        loading,
        error,
        data
      }) => {
        if (error) { return <Error /> }
        if (loading) { return <Loading /> }
        if (data.team.length === 0) { return <Empty /> }

        return (
          <React.Fragment>
            <h1>Team</h1>
            <ul>
              {data.team.map(({ name }) =>
                <li key={name}>{name}</li>
              )}
            </ul>
          </React.Fragment>
        )
      }
    }
  </Fetch>
)
