import useLocalStorage from "./useLocalStorage"

interface IDarkMode {
  darkMode: boolean
  toggle: () => void
}

const useDarkMode = (defaultValue?: boolean): IDarkMode => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", defaultValue)

  return {
    darkMode,
    toggle: () => setDarkMode((theme) => !theme),
  }
}

export default useDarkMode
