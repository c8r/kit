
# Knobs

Add form controls to adjust a component's props

```jsx
import { Knobs } from '@compositor/kit'
import Button from './Button'

const example = (
  <Knobs>
    <Button>
      Hello
    </Button>
    <Knobs.Input name='color' />
    <Knobs.Select name='size'>
      <option>small</option>
      <option>medium</option>
      <option>large</option>
    </Knobs.Select>
    <Knobs.Checkbox name='active' />
  </Knobs>
)
```
