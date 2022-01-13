import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import GlobalStyles from "./src/assets/themes/globalStyles"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <GlobalStyles />
    {element}
  </StoreProvider>
)
