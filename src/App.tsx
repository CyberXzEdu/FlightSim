import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import "./global.scss";

import { theme } from "./Theme/theme";
import { GlobalStyle } from "./Theme/sheet";
import Router from "./Common/Routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <HashRouter>
        <Router/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;