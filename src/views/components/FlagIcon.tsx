import React from "react"
import { Georgia, Usa } from "../../imgs/countries/index"

interface Props {
  readonly code: string
}

const FlagIcon = ({ code }: Props): React.ReactElement => {
  switch (code) {
    case "GEL":
      return <img src={Georgia} className="h-7" alt="Georgian flag" />
    case "USD":
      return <img src={Usa} className="h-7" alt="USA flag" />
    default:
      return <img src={Georgia} className="h-7" alt="no flag" />
  }
}

export default FlagIcon
