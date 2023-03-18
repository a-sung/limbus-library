import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  *{
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *, :after, :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    -webkit-tap-highlight-color:transparent;
    -webkit-text-size-adjust:100%;
    text-size-adjust:100%;
    cursor:default;
    line-height:1.5;
    overflow-wrap:break-word;
    -moz-tab-size:4;
    tab-size:4;
  }

  html, body {
    height:100%;
  }

  img, picture, video, canvas, svg {display: block;max-width:100%;}

  button {
    background:none;
    border:0;
    cursor:pointer;
  }

  a {text-decoration:none}

  table {
    border-collapse:collapse;
    border-spacing:0
  }

`

export default GlobalStyles;
