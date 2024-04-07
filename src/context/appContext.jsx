import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProviderContext = ({ children }) => {
  const [hash, setHash] = useState({ value: "", state1: null, state2: null });

  return (
    <AppContext.Provider value={{ hash, setHash }}>
      {children}
    </AppContext.Provider>
  );
};
