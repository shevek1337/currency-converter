import React, { useContext } from "react"
import { DataContext } from "../../contexts/dataContext"
import chevronRight from "../../imgs/chevron-right.svg"
import chevronDown from "../../imgs/chevron-down.svg"
import FlagIcon from "../components/FlagIcon"

const Page = () => {
  const { data } = useContext(DataContext)
  if (data == null) return null
  const currencies = data[0].currencies

  return (
    <div className="flex justify-center dark:bg-gray-800 dark:text-white h-screen">
      <div className="bg-gray-50 lg:max-w-screen-lg w-full mt-4 p-4 flex flex-col items-center gap-5 dark:bg-gray-700 rounded h-fit-content">
        <h2 className="text-3xl">კონვერტაცია</h2>
        <div>
          <div className="flex items-center bg-white dark:bg-gray-800  p-4 gap-10 rounded-lg">
            <div className="flex gap-4 items-center">
              <FlagIcon code="GEL" />

              <input
                className="outline-none border-b h-8 dark:bg-gray-800"
                type="text"
                placeholder="ლარი"
              />
            </div>
            <img src={chevronRight} className="h-6" alt="right icon" />
            <div className="flex gap-4 items-center">
              <button className="p-2 flex items-center gap-1 hover:bg-gray-50 rounded">
                <FlagIcon code="USD" />
                <img src={chevronDown} className="h-4" alt="" />
              </button>
              <input
                className="outline-none border-b h-8 dark:bg-gray-800"
                type="text"
                placeholder="დოლარი"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
