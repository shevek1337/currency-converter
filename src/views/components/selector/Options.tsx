import React, { ReactElement } from "react"

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

export default Options
