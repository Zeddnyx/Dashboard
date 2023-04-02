import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { AppProvider } from "./context/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routing />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
