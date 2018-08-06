# Colorable

Render prop component for the [colorable][colorable] library.

```.jsx
<Colorable
  colors={['black', 'white', '#07c', 'tomato']}
  children={combos => combos.map(combo =>
    <div
      key={combo.hex}
      children={combo.combinations.map(c =>
        <Button key={c.hex} bg={c.hex} color={combo.hex} m={3}>Beep</Button>
      )}
    />
  )}
/>
```

[colorable]: https://github.com/jxnblk/colorable
