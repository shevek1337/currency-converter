import React, { createContext, useState } from "react"
import useFetch from "../hooks/useFetch"

interface Data {
  readonly date: string
  readonly currencies: ReadonlyArray<{
    readonly code: string
    readonly quantity: number
    readonly rateFormated: string
    readonly diffFormated: string
    readonly rate: number
    readonly name: string
    readonly diff: number
    readonly date: string
    readonly validFromDate: string
  }>
}

interface DataContextProps {
  readonly data: Data[] | null
  readonly loading: boolean
  readonly error: string | null
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
