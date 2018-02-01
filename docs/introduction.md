```!jsx
<Box bg='black' color='white' px={3} py={[3, 4, 5]}>
  <h1>Styleguide</h1>
</Box>
```

## Table of Contents

## Preprocessing

When you invoke `styleguide` it first processes your components and associated documentation.
This first step is where `styleguide` interacts with your file system.

### Steps

1. searches for all component source code and documentation
1. parses and analyzes source code
1. constructs a sitemap for navigation
1. handles frontmatter options
1. imports components
1. applies any configuration

### `getInitialProps`

This data is applied as initial props to the top level [`Styleguide`](../Styleguide.md).
As such, changes to markdown documentation requires a restart (though this is something we plan on supporting in the future).

### Bundling

Styleguide uses [`x0`](https://github.com/c8r/x0) to bundle the app for both the development server and production builds.

## Styleguide Component

The Styleguide component can be used without the preprocessing layer if desired.
This component constructs the routes (via [`react-router`](https://github.com/ReactTraining/react-router)) and provides all desired components and props via the `StyleguideProvider`.

### Routing



### Styleguide Provider



### Markdown

#### Code blocks

Since this is intended to be a living styleguide for components, `.jsx` code blocks have additional features

`.jsx` code blocks can be configured using frontmatter:

```
---
editor: true
---
<h1>Hello, world!</h1>
```

| Option | Default | Description |
| ------ | ------- | ----------- |
| `editor` | `false` | Make codeblock live editable |
| `xray` | `false` | Add [`react-x-ray`](https://github.com/jxnblk/react-x-ray) toggle |

### JSX

NOT YET IMPLEMENTED

#### Components

There are numerous components that `Styleguide` provides for usage throughout your documentation.
They are all documented individually in the Components section.
