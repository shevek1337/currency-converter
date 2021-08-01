import React, { useContext } from "react"
import Header from "./includes/Header"
import { ThemeContext } from "../contexts/ThemeContext"

const Layout = (): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
    </div>
  )
}

export default Layout
