import React, { ReactElement, useContext } from "react"
import { DataContext } from "../../contexts/dataContext"
import useDropdown from "../../hooks/useDropdown"
import ChevronDownIcon from "../components/ChevronDownIcon"
import ChevronRightIcon from "../components/ChevronRightIcon"
import FlagIcon from "../components/FlagIcon"

const Converter = (): ReactElement | null => {
  const { data } = useContext(DataContext)
  if (data == null) return null
  const { isSelected, toggleDropdown } = useDropdown()
  const currencies = data[0].currencies

  return (
    <div className="flex justify-center dark:bg-gray-800 dark:text-white">
      <div className="bg-gray-50 lg:max-w-screen-lg w-full my-6 p-4 flex flex-col items-center gap-5 dark:bg-gray-700 rounded-lg h-fit-content shadow">
        <div className="flex items-center  p-4 gap-10 rounded-lg">
          <div className="flex gap-4 items-center">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FlagIcon code="GEL" name="ქართული ლარი" />
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="dark:focus:ring-gray-500 dark:focus:bg-gray-800 dark:bg-gray-600 block w-full pl-12 pr-12 text-2xl border-gray-300 dark:border-gray-500 rounded-md dark:placeholder-gray-400"
                placeholder="0.00"
              />
            </div>
          </div>
          <ChevronRightIcon />
          <div className="flex gap-4 items-center">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FlagIcon code="USD" name="ქართული ლარი" />
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="dark:focus:ring-gray-500 dark:focus:bg-gray-800 dark:bg-gray-600 block w-full pl-12 pr-12 text-2xl border-gray-300 dark:border-gray-500 rounded-md dark:placeholder-gray-400"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <div className="relative">
                  <button
                    className="flex gap-1 items-center focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-4 border-transparent bg-transparent text-gray-500 text-2xl rounded-md dark:text-gray-100"
                    onClick={() => toggleDropdown()}
                  >
                    USD
                    <ChevronDownIcon
                      className={
                        isSelected ? "h-4 transform rotate-180" : "h-4"
                      }
                    />
                  </button>
                  <Options currencies={currencies} isSelected={isSelected} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Converter

interface OptionsProps {
  readonly isSelected: boolean
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

const Options = ({ isSelected, currencies }: OptionsProps): ReactElement => {
  return (
    <div className={isSelected ? "block absolute right-0" : "hidden"}>
      <ul
        className={`mt-3 w-max bg-white dark:bg-gray-500 border border-white  dark:border-gray-500 shadow-lg max-h-72 rounded-md ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none `}
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <input
          type="text"
          name="search"
          id="search"
          className="dark:focus:ring-gray-500 focus:ring-0 focus:bg-gray-50 dark:focus:bg-gray-800 dark:bg-gray-700 block w-full border-b border-0 rounded-tl-md dark:placeholder-gray-400"
          placeholder="ვალუტის ძებნა..."
          autoComplete="off"
        />
        {currencies.map((currency) => (
          <li
            className="text-gray-600 dark:text-white cursor-pointer select-none relative py-2 pl-3 pr-3 hover:bg-indigo-700 dark:hover:bg-gray-700 hover:text-white font-bold"
            id="listbox-option-0"
            role="option"
            key={currency.code}
            title={currency.name}
          >
            <div className="flex items-center">
              <FlagIcon code={currency.code} name={currency.name} />
              <span className="ml-3 block truncate">{currency.code}</span>
              <span className="ml-3 block truncate">
                {currency.name.slice(0, 19)}
                {currency.name.length > 19 && "..."}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
