import React from "react";
import Page from "./Components/Page/index";
import "./App.css";

import {ThemeProvider} from "./myContext"

function App() {
  return (
    <ThemeProvider>
      
    <Page  />
    
    </ThemeProvider>
    
  );
}

export default App;
