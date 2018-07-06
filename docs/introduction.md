# Introduction

Kit is a collection of components for developing, documenting, and testing React component libraries.
It provides components for library views, styleguides, and other utilities for documentation and testing.

Here's an example of the Cartesian component that's useful in styleguides.
It renders all possible prop combinations.

```.jsx
<Cartesian
  component={Button}
  children='Beep'
  m={3}
  bg={['blue', 'purple', 'green']}
/>
```

## Motivation

We often end up with markdown files for documentation, custom API code for development environments, a separate code base for style guides and demos, and snapshot tests that are largely duplicative of the rest.
While our source code was fairly DRY, the amount of code to support it seemed all over the place.

We took a step back and thought, what if our component examples could be reused for developing components, creating documentation, and writing tests, with a minimal amount of effort to set up and flexible enough to integrate with any existing React setup.

## Components over configuration

Kit avoids custom APIs that are specific to a given tool, instead opting for React components with a familiar API.
This is advantageous because Kit components and workflows can be gradually integrated to an existing environment.
It also allows you to continue with existing devtool-based debugging workflows.

The [Kit repo][repo] has numerous [examples][examples] showing integration with popular frameworks and UI libraries.

Read more about Kit on our [blog][blog].

[blog]: https://compositor.io/blog/introducing-kit
[examples]: https://github.com/c8r/kit/tree/master/templates
[repo]: https://github.com/c8r/kit
