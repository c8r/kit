
<img width='192' height='192' src='https://compositor.io/logo/dist/kit.png' />

# Kit

Tools for developing, documenting, and testing React component libraries

## Features

- Utility components for isolated development
- Project scaffolding generator
- Isolated development server
- Component library viewer


## Getting started

Kit contains several different ways to incorporate with your existing setup or generate a new project.

- Use the CLI to run an isolated development server for example components.
- Or use the CLI `init` command to generate a new project.
- Use the Kit components to customize your existing dev environment, docs, or demos.

### CLI

```sh
npm install --global @compositor/kit-cli
```

#### Development Server

The Kit dev server can be passed either a single React component or a folder of example components.

```sh
kit examples
```

Read more in the [dev server docs](dev).

#### Project Generator

Run `kit init` and follow the prompts to generate a new project based on several different templates.

Read more in the [CLI docs](cli).

### Components

Kit components can be added to any existing React setup.
Use these utility components to for development, documentation, and demos.

```sh
npm install --save @compositor/kit
```

The Kit component library includes the following:

- [Library](core/docs/Library.md)
- [XRay](core/docs/XRay.md)
- [Debug](core/docs/Debug.md)
- [Responsive](core/docs/Responsive.md)
- [Frame](core/docs/Frame.md)
- [Cartesian](core/docs/Cartesian.md)
- [Matrix](core/docs/Matrix.md)
- [LiveEditor](core/docs/LiveEditor.md)
- [PropsForm](core/docs/PropsForm.md)
- [Markdown](core/docs/Markdown.md)
- [State](core/docs/State.md)
- [Diff](core/docs/Diff.md)
- And more...

Read more in the [component docs](core).

## Related

- [@compositor/x0][x0]
- [@mdx-js/mdx][mdx]
- [react-live][react-live]
- [styled-system][styled-system]

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)

[x0]: https://github.com/c8r/x0
[mdx]: https://github.com/mdx-js/mdx
[react-live]: https://github.com/FormidableLabs/react-live
[styled-system]: https://github.com/jxnblk/styled-system
