import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AppProvider } from "./context"
import "react-alice-carousel/lib/alice-carousel.css"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
