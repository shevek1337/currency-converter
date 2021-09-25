import React, { useContext } from "react"
import { DataContext } from "../../contexts/dataContext"
import FlagIcon from "../components/FlagIcon"

const Table = (): React.ReactElement | null => {
  const { data } = useContext(DataContext)
  if (data == null) return null
  const currencies = data[0].currencies

  return (
    <div className="flex justify-center dark:bg-gray-800 dark:text-white pb-10">
      <div className="lg:max-w-screen-lg w-full shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-20 dark:divide-gray-500">
          <thead className="bg-gray-50 dark:bg-gray-600">
            <tr>
              <th />
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-white uppercase tracking-wider"
              >
                კოდი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-white uppercase tracking-wider"
              >
                სახელი
              </th>
              <th
                scope="col"
                className="text-center px-6 py-3 text-sm font-medium text-gray-500 dark:text-white uppercase tracking-wider"
              >
                ცვლილება
              </th>
              <th
                scope="col"
                className="text-center px-6 py-3 text-sm font-medium text-gray-500 dark:text-white uppercase tracking-wider"
              >
                კურსი
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
            {currencies.map((currency) => (
              <tr
                key={currency.code}
                className="hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 whitespace-nowrap center">
                  <FlagIcon
                    code={currency.code}
                    name={currency.name}
                    className="mx-auto"
                  />
                </td>
                <td className="px-6 pt-1.5 whitespace-nowrap font-bold">
                  {currency.code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{currency.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
                      currency.diff >= 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {currency.diffFormated}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-100 font-bold text-center">
                  {(currency.rate / currency.quantity).toFixed(4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
