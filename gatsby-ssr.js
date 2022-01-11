import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import GlobalStyles from "./src/assets/themes/globalStyles"
// import "./src/styles/reset.css"
// import "./src/styles/variables.css"
// import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <GlobalStyles />
    {element}
  </StoreProvider>
)
