import React, { createContext, useContext, useReducer } from "react";

//prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data so that every component can get access to data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
