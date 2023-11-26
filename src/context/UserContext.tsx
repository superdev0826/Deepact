import React, { createContext, useState } from "react";

const initialState = {
  token: "",
  authenticated: false,
  setAuthenticated: () => {},
  user: null,
};

export const UserContext: React.Context<any> = createContext(initialState);

export const UserProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
