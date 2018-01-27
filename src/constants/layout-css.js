export default (theme = {}) => `
  html,
  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${theme.fonts && theme.fonts[0] || 'sans-serif'};
  }

  * {
    box-sizing: border-box;
  }
`
