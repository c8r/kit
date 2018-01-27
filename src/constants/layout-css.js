export default (theme = {}) => `
  html,
  body {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    font-family: ${theme.fonts && theme.fonts[0] || 'sans-serif'};
  }

  * {
    box-sizing: border-box;
  }
`
