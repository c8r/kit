# @compositor/webfont

Webfont loading utilities

```sh
npm i @compositor/webfont
```

```js
const webfont = require('@compositor/webfont')

const linkTagString = webfont.getLinkTag('"Roboto Mono", monospace')

const stylesheetURL = webfont.getURL('"Roboto Mono", monospace')

webfont.isWebfont('Roboto Mono')
// true

const fonts = webfont.fonts
// array of font names from Google Fonts
```
