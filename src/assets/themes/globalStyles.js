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

   /* This defines what 1rem is */
  font-size: 62.5%; /* 1 rem = 10px; 10px/16px = 62.5% */
  @media ${device.mobileL} {
      font-size: 75%; /* 1 rem = 12px 12/16 = .75 */
  }
  @media ${device.tablet} {
    font-size: 87.5%; /* 1 rem = 14px 14/16 = .875 */
  }
  @media ${device.laptop} {
      font-size: 100%; /* 1 rem = 16px 16/16 = 100% */
  }
  @media ${device.desktop} {
      font-size: 112%; /* 1 rem = 18px 18/16 = 1.125% */
  }
  @media ${device.desktopL} {
      font-size: 137.5%; /* 1 rem = 22px 22/16 = 1.375% */
  }
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
