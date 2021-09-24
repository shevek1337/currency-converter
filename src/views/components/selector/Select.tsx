import React, { ReactElement } from "react"
import FlagIcon from "../FlagIcon"
import chevronDown from "../../../imgs/chevron-down.svg"
import useDropdown from "../../../hooks/useDropdown"
import Options from "./Options"

type Props = {
  readonly code: string
  readonly name: string
}

const Select = ({ code, name }: Props): ReactElement => {
  const { isSelected, toggleDropdown } = useDropdown()

  return (
    <div className="relative">
      <button
        className="p-2 flex items-center gap-1 hover:bg-gray-50 rounded"
        onClick={() => toggleDropdown()}
      >
        <FlagIcon code={code} name={name} />
        <img
          src={chevronDown}
          className={isSelected ? "h-4 transform rotate-180" : "h-4"}
          alt=""
        />
      </button>
      <Options isSelected={isSelected} />
    </div>
  )
}

export default Select
