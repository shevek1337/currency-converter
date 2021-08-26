import React, { ReactElement, useState } from "react"
import FlagIcon from "./FlagIcon"
import chevronDown from "../../imgs/chevron-down.svg"

type Props = {
  readonly id: string
}

const Dropdown = ({ id }: Props): ReactElement => {
  const [isSelected, setIsSelected] = useState(false)
  const toggleDropdown = () => {
    return setIsSelected(!isSelected)
  }

  return (
    <div className="relative">
      <button
        className="p-2 flex items-center gap-1 hover:bg-gray-50 rounded"
        onClick={() => toggleDropdown()}
      >
        <FlagIcon code="USD" />
        <img src={chevronDown} className="h-4" alt="" />
      </button>
      <div className={isSelected ? "block absolute" : "hidden"} id={id}>
        <ul>
          <li>USD</li>
          <li>GEL</li>
          <li>RUB</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
