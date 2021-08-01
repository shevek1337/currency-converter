import React, { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"

const Page = () => {
  const { data } = useContext(DataContext)
  if (data == null) return null
  const currencies = data[0].currencies

  return (
    <div className="flex justify-center dark:bg-gray-800 dark:text-white h-screen">
      <div className="bg-gray-50 lg:max-w-screen-lg w-full mt-4 p-4 flex justify-center dark:bg-gray-700">
        <h2 className="text-5xl">Hello</h2>
        {console.log(currencies.map((currency) => currency.name))}
      </div>
    </div>
  )
}

export default Page
