import React, { createContext } from "react"
import useDarkMode from "../hooks/useDarkMode"

interface ThemeContextProps {
  darkMode: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggle: () => null,
})

type Props = {
  children: React.ReactNode
}

const ThemeContextProvider = (props: Props) => {
  const { children } = props
  const { darkMode, toggle } = useDarkMode(false)

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
