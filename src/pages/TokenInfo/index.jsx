
import React from 'react';
import StylesProvider from "@mui/styles/StylesProvider"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../../styles/theme"

import TokenInfo from "./Main"

const Index = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <TokenInfo />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default Index
