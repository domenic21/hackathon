import React, { createContext, useState, useContext } from 'react';

// Initialize the StateContext with initialState as the default value
const StateContext = createContext();

const initialState = {
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  // Pass all the states for the functionality
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu,  }} 
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
