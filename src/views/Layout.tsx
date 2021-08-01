import React, { useContext } from "react"
import Header from "./includes/Header"
import { ThemeContext } from "../contexts/ThemeContext"
import { DataContext } from "../contexts/DataContext"
import Loader from "./components/Loader"
import Page from "./includes/MainSection"

const Layout = (): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { loading } = useContext(DataContext)

  if (loading) return <Loader className="flex m-auto h-screen" />

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <Page />
    </div>
  )
}

export default Layout
