import React from "react"
import Header from "./includes/Header"
import { useGlobalContext } from "../hooks/useGlobalContext"

const Layout = (): React.ReactElement => {
  const { darkMode } = useGlobalContext()
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
    </div>
  )
}

export default Layout
