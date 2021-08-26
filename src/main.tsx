import React from "react"
import ReactDOM from "react-dom"
import Layout from "./views/Layout"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { DataContextProvider } from "./contexts/dataContext"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DataContextProvider>
        <Layout />
      </DataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
