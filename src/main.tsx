import React from "react"
import ReactDOM from "react-dom"
import Layout from "./views/Layout"
import { AppProvider } from "./hooks/useGlobalContext"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Layout />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
