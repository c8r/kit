# Cartesian

Display the Cartesian product of component props.

```.jsx
<Cartesian
  component={Button}
  m={4}
  p={[3, 4]}
  fontSize={[1, 3]}
  bg={['blue', 'tomato', 'purple']}
  children={'Beep'}
/>
```

## Props

name | type | description
---|---|---
`component` | React component | the component to render
`...props` | Props for Cartesian product | Only arrays are computed in the product
