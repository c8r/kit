# Matrix

Displays a matrix of component permutations.

```.jsx
<Matrix
  component={Button}
  x={[
    { children: 'Hello' },
    { children: 'Hello', bg: 'tomato' },
    { children: 'Hello', bg: 'black' },
    { children: 'Hello', bg: 'white', color: 'black' },
  ]}
  y={[
    {  size: 'small' },
    {  size: 'medium', mt: 2 },
    {  size: 'large', mt: 2 },
  ]}
/>
```

## Props

name | type | description
---|---|---
`component` | React component | the component to render
`x` | array | an array of props objects to display on the x-axis
`y` | array | an array of props objects to display on the y-axis
`width` | number | width of each column
