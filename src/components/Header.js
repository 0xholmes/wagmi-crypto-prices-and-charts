import React from "react"
import {
  makeStyles,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context"

const useStyles = makeStyles(() => ({
  title: {
    color: "#14BBFB",
    fontFamily: "lato",
    fontWeight: "bold",
    cursor: "pointer",
  },
}))

const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { currency, setCurrency } = useGlobalContext()

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => navigate("/")}
              variant="h6"
            >
              WAGMI Charts
            </Typography>
            <div style={{ flex: 1 }}></div>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="THB">THB</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
