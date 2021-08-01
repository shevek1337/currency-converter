import React from "react"
import ReactDOM from "react-dom"
import Layout from "./views/Layout"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
