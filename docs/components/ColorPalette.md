# Color Palette

The `ColorPalette` component automatically documents the colors in your theme.
You can optionally display all accessible color combinations as well.

## Details

```!jsx
<Docgen {...props.styleguide.components.ColorPalette.info} />
```

```.jsx
---
xray: true
---
<ColorPalette
  colors={theme.colors}
  colorable={true}
/>
```

## Related

- [`colorable`](https://github.com/jxnblk/colorable)
