# styleguide

Generate a styleguide from Compositor Lab configs.

## Installation

```bash
npm install --save-dev @compositor/styleguide
```

## Usage

```js
const styleguide = require('@compositor/styleguide')

const config = require('./lab.json')
const theme = require('./theme.json')

styleguide({
  config,
  theme,
  includes: {
    atomic: true
  }
})
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by Compositor ([@getcompositor](https://twitter.com/getcompositor)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
