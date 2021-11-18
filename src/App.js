import { BrowserRouter, Routes, Route } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import Header from "./components/Header"
import Home from "./pages/Home"
import CoinPage from "./pages/CoinPage"
import "./App.css"

const useStyles = makeStyles(() => ({
  App: {
    // backgroundColor: "#424245",
    backgroundColor: "#14161a",
    color: "#f5f5f7",
    minHeight: "100vh",
  },
}))

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
