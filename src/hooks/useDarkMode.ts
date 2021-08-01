import useLocalStorage from "./useLocalStorage"

interface UseDarkModeValue {
  darkMode: boolean
  toggle: () => void
}

const useDarkMode = (defaultValue?: boolean): UseDarkModeValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", defaultValue)

  return {
    darkMode,
    toggle: () => setDarkMode((theme) => !theme),
  }
}

export default useDarkMode
