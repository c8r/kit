# Color Palette

The `ColorPalette` component automatically documents the colors in your theme.
You can optionally display all accessible color combinations as well.

```.jsx
---
xray: true
---
<ColorPalette
  colors={theme.colors}
  colorable={true}
/>
```

## Details

```!jsx
<Docgen {...props.styleguide.components.ColorPalette.info} />
```

## Related

- [`colorable`](https://github.com/jxnblk/colorable)
