# Styleguide

Generate a styleguide from Compositor Lab configs.

## Installation

```bash
npm install -g @compositor/styleguide
```

## Usage

```js
import styleguide from '@compositor/styleguide'

styleguide()
```

```sh
styleguide -h
```

### Options

| Name | Default | Description |
| ---- | ------- | ----------- |
| `lab` | `path.join(__dirname, 'lab.json')` | Location of Lab config file |
| `theme` | `path.join(__dirname, 'theme.json')` | Location of theme file |
| `logo` | `undefined` | Url for the logo to be shown in the nav |

### Included components

In addition the components you pass into the generator, there are styleguide specific components added to the scope.

#### `<SGExamples />`

#### `<SGColorCard color='red' />`

#### `<SGPropsTable />`

#### `<SGStyledApi />`

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

***

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)
