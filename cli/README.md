# Kit CLI

Command line interface for Compositor Kit,
including an isolated development server and project generator.

```
$ npm install --global @compositor/kit-cli
```

## Development Server

Isolated development server for React components

- Zero configuration
- Hot reloading
- No entry point or HTML required
- Isolated from your main application
- Renders components and elements
- Supports MDX & JSX formats

Start the dev server by passing a directory of components as the first argument.
Be sure to install any local dependencies, including `react`.

```sh
kit examples
```

### Options

```
-o --open     Opens development server in default browser
-p --port     Port for development server
-m --mode     Enable alternative server UI modes
--webpack     Path to custom webpack.config.js
```

To see available options, run:

```sh
kit --help
```

All command line options can be set in your `package.json` file with a `kit` field.

```json
{
  "kit": {
    "port": 9000,
    "open": true
  }
}
```

### Modes

By default, the Kit dev server renders each component in isolation with minimal base styling for the document.
Use the `--mode` flag to enable alternative modes for the development UI.

#### Library Mode

Renders components using the [Kit Library component][Library] component, which displays all components together in a grid and in isolation when clicked.

```sh
kit examples --mode library
```

[Library]: ../core/docs/Library.md


## Generator

Run the `init` command and follow the prompts to create a new project.

```sh
kit init
```

## Help

```
kit --help
```

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)
