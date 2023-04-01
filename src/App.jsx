import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { authContext } from "./context/context";

function App() {
  const [signIn, setSignIn] = React.useState(false)
  const [user, setUser] = React.useState(undefined)

  return (
    <>
      <BrowserRouter>
        <authContext.Provider value={{ signIn, setSignIn, user, setUser }}>
          <Routing />
        </authContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
