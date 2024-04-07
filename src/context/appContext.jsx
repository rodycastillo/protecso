import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProviderContext = ({ children }) => {
  const [hash, setHash] = useState("");

  return (
    <AppContext.Provider value={{ hash, setHash }}>
      {children}
    </AppContext.Provider>
  );
};
