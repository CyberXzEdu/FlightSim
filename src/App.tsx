import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import "./global.scss";

import { theme } from "./Theme/theme";
import Router from "./Common/Routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Router/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;