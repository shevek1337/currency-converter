import React from "react"
import FlagIcon from "./FlagIcon"

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

const CurrencyOptions = ({
  isSelected,
  currencies,
}: OptionsProps): React.ReactElement => {
  return (
    <div className={isSelected ? "block absolute right-0" : "hidden"}>
      <ul
        className={`mt-3 mr-0.5 w-max bg-white dark:bg-gray-500 border border-white  dark:border-gray-500 shadow-lg max-h-72 rounded-md ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none `}
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
            className="text-gray-600 dark:text-white cursor-pointer select-none relative py-2 pl-3 pr-3 hover:bg-indigo-700 dark:hover:bg-gray-700 hover:text-white"
            id="listbox-option-0"
            role="option"
            key={currency.code}
            title={currency.name}
          >
            <div className="flex items-center">
              <FlagIcon code={currency.code} name={currency.name} />
              <span className="ml-3 block truncate pt-1 font-bold">
                {currency.code}
              </span>
              <span className="ml-3 block truncate">
                {currency.name.slice(0, 28)}
                {currency.name.length > 28 && "..."}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrencyOptions
