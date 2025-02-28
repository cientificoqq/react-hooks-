// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import RouterLayout from "./components/router-layout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouterLayout />
    </BrowserRouter>
  );
};

export default App;
