import React, { createContext, ReactElement } from "react"
import useFetch from "../hooks/useFetch"

interface IData {
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
  readonly data: IData[] | undefined
  readonly error: Error | undefined
}

const DataContext = createContext<DataContextProps>({
  data: undefined,
  error: undefined,
})

type Props = {
  children: React.ReactNode
}

const DataContextProvider = (props: Props): ReactElement => {
  const url = "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json"
  const { children } = props
  const { data, error } = useFetch<IData[]>(url)

  return (
    <DataContext.Provider
      value={{
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
