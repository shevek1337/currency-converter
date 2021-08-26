import React, { createContext, ReactElement } from "react"
import useDarkMode from "../hooks/useDarkMode"

interface IThemeContext {
  darkMode: boolean
  toggle: () => void
}

const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  toggle: () => null,
})

type Props = {
  children: ReactElement
}

const ThemeContextProvider = (props: Props): ReactElement => {
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
