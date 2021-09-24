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
        <h2 className="text-3xl">კონვერტაცია</h2>
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
                  <Options isSelected={isSelected} />
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

type Props = {
  readonly isSelected: boolean
}

const Options = ({ isSelected }: Props): ReactElement => {
  return (
    <div className={isSelected ? "block absolute" : "hidden"}>
      <ul>
        <li>USD</li>
        <li>GEL</li>
        <li>RUB</li>
      </ul>
    </div>
  )
}
