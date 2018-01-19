# Styleguide

Generate a styleguide for React components, including those built with [Lab](https://compositor.io/lab).
Include other types of documentation as well, using a nifty superset of [Markdown](https://github.com/c8r/markdown).

## Installation

```bash
npm install -g @compositor/styleguide
```

## Usage

```sh
styleguide -md docs -lib library
```

### Options

| Name | Default | Description |
| ---- | ------- | ----------- |
| `library` | `library` | Directory location of components |
| `docs` | `docs` | Directory location of markdown files |
| `logo` | `undefined` | Url for the logo to be shown in the nav |
| `out-dir` | `dist` | Where the static build is output |

`styleguide` will also look in the `package.json` for configuration as well.

### Included components

In addition the components you pass into the generator, there are styleguide specific components added to the scope.

#### `<SGExamples />`

#### `<SGColorCard color='red' />`

#### `<SGPropsTable />`

#### `<SGStyledApi />`

#### `<SGLiveEditor />`

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
