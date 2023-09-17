import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  theme: 'light'
}

const themeReducer = (state,action) => {
  switch(action.type){

  }
}
const ThemeContext = createContext()

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return <ThemeContext.Provider>
    {children}
  </ThemeContext.Provider>
}