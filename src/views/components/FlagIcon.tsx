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
  readonly className?: string
}

const FlagIcon = ({ code, name, className }: Props): ReactElement => {
  const classNames = "h-7 " + className
  switch (code) {
    case "GEL":
      return <img className={classNames} src={Georgia} alt={name} />
    case "USD":
      return <img className={classNames} src={Usa} alt={name} />
    case "AED":
      return <img className={classNames} src={UnitedArabEmirates} alt={name} />
    case "AMD":
      return <img className={classNames} src={Armenia} alt={name} />
    case "AUD":
      return <img className={classNames} src={Australia} alt={name} />
    case "AZN":
      return <img className={classNames} src={Azerbaijan} alt={name} />
    case "BGN":
      return <img className={classNames} src={Bulgaria} alt={name} />
    case "BRL":
      return <img className={classNames} src={Brazil} alt={name} />
    case "BYN":
      return <img className={classNames} src={Belarus} alt={name} />
    case "CAD":
      return <img className={classNames} src={Canada} alt={name} />
    case "CHF":
      return <img className={classNames} src={Switzerland} alt={name} />
    case "CNY":
      return <img className={classNames} src={China} alt={name} />
    case "CZK":
      return <img className={classNames} src={CzechRepublic} alt={name} />
    case "DKK":
      return <img className={classNames} src={Denmark} alt={name} />
    case "EGP":
      return <img className={classNames} src={Egypt} alt={name} />
    case "EUR":
      return <img className={classNames} src={EU} alt={name} />
    case "GBP":
      return <img className={classNames} src={UnitedKingdom} alt={name} />
    case "HKD":
      return <img className={classNames} src={HongKong} alt={name} />
    case "HUF":
      return <img className={classNames} src={Hungary} alt={name} />
    case "ILS":
      return <img className={classNames} src={Israel} alt={name} />
    case "INR":
      return <img className={classNames} src={India} alt={name} />
    case "IRR":
      return <img className={classNames} src={Iran} alt={name} />
    case "ISK":
      return <img className={classNames} src={Iceland} alt={name} />
    case "JPY":
      return <img className={classNames} src={Japan} alt={name} />
    case "KGS":
      return <img className={classNames} src={Kyrgyzstan} alt={name} />
    case "KRW":
      return <img className={classNames} src={SouthKorea} alt={name} />
    case "KWD":
      return <img className={classNames} src={Kuwait} alt={name} />
    case "KZT":
      return <img className={classNames} src={Kazakhstan} alt={name} />
    case "MDL":
      return <img className={classNames} src={Moldova} alt={name} />
    case "NOK":
      return <img className={classNames} src={Norway} alt={name} />
    case "NZD":
      return <img className={classNames} src={NewZealand} alt={name} />
    case "PLN":
      return <img className={classNames} src={Poland} alt={name} />
    case "QAR":
      return <img className={classNames} src={Qatar} alt={name} />
    case "RON":
      return <img className={classNames} src={Romania} alt={name} />
    case "RSD":
      return <img className={classNames} src={Serbia} alt={name} />
    case "RUB":
      return <img className={classNames} src={Russia} alt={name} />
    case "SGD":
      return <img className={classNames} src={Singapore} alt={name} />
    case "TJS":
      return <img className={classNames} src={Tajikistan} alt={name} />
    case "TMT":
      return <img className={classNames} src={Turkmenistan} alt={name} />
    case "TRY":
      return <img className={classNames} src={Turkey} alt={name} />
    case "UAH":
      return <img className={classNames} src={Ukraine} alt={name} />
    case "UZS":
      return <img className={classNames} src={Uzbekistan} alt={name} />
    case "ZAR":
      return <img className={classNames} src={SouthAfrica} alt={name} />
    case "SEK":
      return <img className={classNames} src={Sweden} alt={name} />
    default:
      return <img className={classNames} src={Georgia} alt="no flag" />
  }
}

export default FlagIcon
