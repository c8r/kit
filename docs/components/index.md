# Components

Kit provides a library of components that can be used to document your components or even use in your apps.

## Importing

Kit exports components at the top level so you can import each component as a named export.

```jsx
import { XRay } from '@compositor/kit'
```

## Usage

Each Kit component has their own API, so check the docs for the component you'd like to use.
Here's an example using XRay.

```.jsx
<XRay>
  <Box p={3}>
    <Heading my={4}>Hello, world!</Heading>
  </Box>
</XRay>
```
