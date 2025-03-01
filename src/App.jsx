import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Header from "./components/Header";
import RouterLayout from "./components/router-layout";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <RouterLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
