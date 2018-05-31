
# Fetch

Data fetcher, editor, and lifecycle toggle.

It's often cumbersome to build and design components and test different states.
With Fetch you can edit returned data and set the state manually all in a render prop component with a minimal surface area.

```jsx
export default props => (
  <Fetch url="https://compositor.fyi">
    {({ loading, error, data }) =>
      <Debug>{{ loading, error, data }}</Debug>
    }
  </Fetch>
)
```

## Props

Name | Type | Description
--- | --- | ---
`url` | String | Url to fetch
`renderEditor` | Component | Custom component for the data editor

## Render prop arguments

Name | Type | Description
--- | --- | ---
`loading` | Boolean | Whether fetch is still awaiting a response
`error` | Object | Error returned from fetch
`data` | Object|Array | Data returned from fetch
