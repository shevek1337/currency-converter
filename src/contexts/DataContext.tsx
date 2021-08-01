import React, { useContext, createContext } from "react"
import useFetch from "../hooks/useFetch"

interface DataContextProps {
  data: Object[] | null
  loading: boolean
  error: string | null
}

const DataContext = createContext<DataContextProps>({
  data: null,
  loading: true,
  error: null,
})

type Props = {
  children: React.ReactNode
}

const DataContextProvider = (props: Props) => {
  const url = "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json"
  const { children } = props
  const { data, loading, error } = useFetch(url)

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
