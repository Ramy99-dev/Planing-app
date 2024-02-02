
import React, { createContext, useState } from 'react';


const Context = createContext({});
const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState([59.51261, 13.54858]);

  const contextValue = {
    location,
    setLocation,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};


export { Context, ContextProvider };
