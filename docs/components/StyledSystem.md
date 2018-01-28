# StyledSystem

If your component uses [`styled-system`](https://github.com/jxnblk/styled-system), you can use the `StyledSystem` component to document the functions that are exposed.
The `styled-system` functions are extracted with [`styled-parser`](https://github.com/jxnblk/styled-parser).

It is automatically added to the scope to all rendering code blocks in `styleguide`.

## Usage

From within a `!jsx` code block, add the following:

```jsx
<StyledSystem
  styleguide={props.styleguide}
  component='Box'
/>
```

This will render any `styled-system` related functions found in the `Box` component.

## Related

- [`styled-system`](https://github.com/jxnblk/styled-system)
- [`styled-parser`](https://github.com/jxnblk/styled-parser)
