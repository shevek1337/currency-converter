import React, { ReactElement } from "react"
import {
  Armenia,
  Australia,
  Azerbaijan,
  Belarus,
  Brazil,
  Bulgaria,
  Canada,
  China,
  CzechRepublic,
  Denmark,
  Egypt,
  EU,
  Georgia,
  HongKong,
  Hungary,
  Iceland,
  India,
  Iran,
  Israel,
  Japan,
  Kazakhstan,
  Kuwait,
  Kyrgyzstan,
  Moldova,
  NewZealand,
  Norway,
  Poland,
  Qatar,
  Romania,
  Russia,
  Serbia,
  Singapore,
  SouthAfrica,
  SouthKorea,
  Sweden,
  Switzerland,
  Tajikistan,
  Turkey,
  Turkmenistan,
  Ukraine,
  UnitedArabEmirates,
  UnitedKingdom,
  Usa,
  Uzbekistan,
} from "../../imgs/countries/index"

interface Props {
  readonly code: string
  readonly name: string
}

const FlagIcon = ({ code, name }: Props): ReactElement => {
  switch (code) {
    case "GEL":
      return <img src={Georgia} className="h-7" alt={name} />
    case "USD":
      return <img src={Usa} className="h-7" alt={name} />
    case "AED":
      return <img src={UnitedArabEmirates} className="h-7" alt={name} />
    case "AMD":
      return <img src={Armenia} className="h-7" alt={name} />
    case "AUD":
      return <img src={Australia} className="h-7" alt={name} />
    case "AZN":
      return <img src={Azerbaijan} className="h-7" alt={name} />
    case "BGN":
      return <img src={Bulgaria} className="h-7" alt={name} />
    case "BRL":
      return <img src={Brazil} className="h-7" alt={name} />
    case "BYN":
      return <img src={Belarus} className="h-7" alt={name} />
    case "CAD":
      return <img src={Canada} className="h-7" alt={name} />
    case "CHF":
      return <img src={Switzerland} className="h-7" alt={name} />
    case "CNY":
      return <img src={China} className="h-7" alt={name} />
    case "CZK":
      return <img src={CzechRepublic} className="h-7" alt={name} />
    case "DKK":
      return <img src={Denmark} className="h-7" alt={name} />
    case "EGP":
      return <img src={Egypt} className="h-7" alt={name} />
    case "EUR":
      return <img src={EU} className="h-7" alt={name} />
    case "GPB":
      return <img src={UnitedKingdom} className="h-7" alt={name} />
    case "HKD":
      return <img src={HongKong} className="h-7" alt={name} />
    case "HUF":
      return <img src={Hungary} className="h-7" alt={name} />
    case "ILS":
      return <img src={Israel} className="h-7" alt={name} />
    case "INR":
      return <img src={India} className="h-7" alt={name} />
    case "IRR":
      return <img src={Iran} className="h-7" alt={name} />
    case "ISK":
      return <img src={Iceland} className="h-7" alt={name} />
    case "JPY":
      return <img src={Japan} className="h-7" alt={name} />
    case "KGS":
      return <img src={Kyrgyzstan} className="h-7" alt={name} />
    case "KRW":
      return <img src={SouthKorea} className="h-7" alt={name} />
    case "KWD":
      return <img src={Kuwait} className="h-7" alt={name} />
    case "KZT":
      return <img src={Kazakhstan} className="h-7" alt={name} />
    case "MDL":
      return <img src={Moldova} className="h-7" alt={name} />
    case "NOK":
      return <img src={Norway} className="h-7" alt={name} />
    case "NZD":
      return <img src={NewZealand} className="h-7" alt={name} />
    case "PLN":
      return <img src={Poland} className="h-7" alt={name} />
    case "QAR":
      return <img src={Qatar} className="h-7" alt={name} />
    case "RON":
      return <img src={Romania} className="h-7" alt={name} />
    case "RSD":
      return <img src={Serbia} className="h-7" alt={name} />
    case "RUB":
      return <img src={Russia} className="h-7" alt={name} />
    case "SGD":
      return <img src={Singapore} className="h-7" alt={name} />
    case "TJS":
      return <img src={Tajikistan} className="h-7" alt={name} />
    case "TMT":
      return <img src={Turkmenistan} className="h-7" alt={name} />
    case "TRY":
      return <img src={Turkey} className="h-7" alt={name} />
    case "UAH":
      return <img src={Ukraine} className="h-7" alt={name} />
    case "UZS":
      return <img src={Uzbekistan} className="h-7" alt={name} />
    case "ZAR":
      return <img src={SouthAfrica} className="h-7" alt={name} />
    default:
      return <img src={Georgia} className="h-7" alt="no flag" />
  }
}

export default FlagIcon
