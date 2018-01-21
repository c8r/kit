# Styleguide

Generate a styleguide for React components, including those built with [Lab](https://compositor.io/lab).
Include other types of documentation as well, using a nifty superset of [Markdown](https://github.com/c8r/markdown).

#### TODO

1. import theme and components
1. glob docs directory
1. construct sitemap/nav
1. grab sg overriding components and assign to defaults
1. render components (use md if found)
1. render all additional
1. examples component

#### Next steps

- allow react component docs
- override layout
- parse additional data from component
- theme provider configuration
- nav ordering

## Installation

```bash
npm install -g @compositor/styleguide
```

## Usage

```sh
styleguide -md docs -lib library
```

### Options

NOT YET IMPLEMENTED

| Name | Default | Description |
| ---- | ------- | ----------- |
| `library` | `library` | Directory location of components |
| `docs` | `docs` | Directory location of markdown files |
| `logo` | `undefined` | Url for the logo to be shown in the nav |
| `out-dir` | `dist` | Where the static build is output |

`styleguide` will also look in the `package.json` for configuration as well.

### Frontmatter

NOT YET IMPLEMENTED

| Name | Default | Description |
| ---- | ------- | ----------- |
| `name` | `filename` | Directory location of components |
| `path` | `src/filename.js` | Location of the component code, set to false if there's no associated component |
| `generate` | `false` | Generate documentation by parsing code (will ignore any markdown or jsx in the file) |
| `navIndex` | `null` | Specify index in navigation |

### Included components

In addition the components you pass into the generator, there are styleguide specific components added to the scope.
You can use these in your markdown or in your React components/examples.

#### `<SGFlex />`

#### `<SGBox />`

#### `<SGNav />`

#### `<SGLogo />`

#### `<SGFooter />`

#### `<SGExamples />`

#### `<SGColorCard color='red' />`

#### `<SGPropsTable />`

#### `<SGImportsTable />`

#### `<SGStyledSystem />`

#### `<SGLiveEditor />`

## Related

- @compositor/markdown
- @compositor/gen
- react-live
- react-docgen
- styled-system
- styled-parser

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
