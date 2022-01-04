import { createGlobalStyle } from "styled-components"
import device from "./device"
import "./reset.css"
import "./variables.css"

const GlobalStyle = createGlobalStyle`

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  touch-action: manipulation;
}
body {
  position: relative;
  min-height: 100%;
  font-feature-settings: "kern";
  font-family: var(--font-body);
  color: var(--text-color);
}
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}
main {
  display: block;
}


.gatsby-image-wrapper {
  margin: auto;
}

.gatsby-image-wrapper [data-main-image] {
  border-radius: var(--radius-sm);
}

`

export default GlobalStyle
