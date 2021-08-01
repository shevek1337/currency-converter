import React, { useContext, createContext } from "react"
import useDarkMode from "./useDarkMode"

interface AppContextProps {
  darkMode: boolean
  toggle: () => void
}

const AppContext = createContext<AppContextProps>({
  darkMode: false,
  toggle: () => null,
})

type Props = {
  children: React.ReactNode
}

const AppProvider = (props: Props) => {
  const { children } = props
  const { darkMode, toggle } = useDarkMode(false)

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
