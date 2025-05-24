import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(4);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <AppContext.Provider
      value={{
        isActive,
        setIsActive,
        showNavbar,
        setShowNavbar,
        lastScrollY,
        setLastScrollY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
