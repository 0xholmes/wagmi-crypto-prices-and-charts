import React, { useContext, useState, useEffect } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")

  useEffect(() => {
    if (currency === "USD") setSymbol("$")
    else if (currency === "THB") setSymbol("฿")
  }, [currency])

  return (
    <AppContext.Provider
      value={{
        currency,
        symbol,
        setCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
