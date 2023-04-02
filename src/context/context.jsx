import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({ empty: true });

function AppProvider({ children }) {
  const [signIn, setSignIn] = React.useState(false);
  const [user, setUser] = React.useState(undefined);

  return (
    <AuthContext.Provider value={{ signIn, setSignIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// so we only use this on components need data user etc
export const appContext = () => {
  return useContext(AuthContext);
}

export default AppProvider;
