# Cartesian

Display the cartesian product of component props

![](images/cartesian.png)

| _Prop_    | _type_ | _default_   | _description_                                            |
| --------- | ------ | ----------- | -------------------------------------------------------- |
| component | Node   | `undefined` | The component to apply the cartesian product to          |
| container | Node   | `Fragment`  | A component to wrap the `component` prop in, for display |
| children  | Array  | `undefined` | each child you'd like as a part of the product           |

```jsx
import React from 'react';
import { Cartesian } from '@compositor/kit';
import Button from '../src/Button';

export default props => (
  <Cartesian
    component={Button}
    m={4}
    fontSize={[1, 2, 3]}
    bg={['blue', 'pink', 'tomato', 'purple']}
    children={['Hello, world!', 'Beep']}
  />
);
```
