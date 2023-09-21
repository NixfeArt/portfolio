'use client'
import { darkTheme, lightTheme } from '@/lib/theme/colors'
import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext