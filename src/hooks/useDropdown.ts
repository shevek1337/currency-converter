import { useCallback, useMemo, useRef, useState } from "react"
import useOutsideClick from "./useOutsideClick"

interface IDropdown<T extends keyof JSX.IntrinsicElements> {
  readonly isSelected: boolean
  readonly toggleDropdown: () => void
  // readonly openDropDown: () => void
  readonly ref: React.RefObject<React.ElementRef<T>>
}

const useDropdown = <T extends keyof JSX.IntrinsicElements>(): IDropdown<T> => {
  const [isSelected, setIsSelected] = useState(false)
  const ref = useRef(null)

  const closeDropDown = useCallback(() => {
    setIsSelected(false)
  }, [isSelected])

  // const openDropDown = useCallback(() => {
  //   setIsSelected(true)
  // }, [isSelected])

  const toggleDropdown = useCallback(() => {
    setIsSelected(!isSelected)
  }, [isSelected])

  const value = useMemo(
    () => ({ isSelected, toggleDropdown, closeDropDown, ref }),
    [isSelected, toggleDropdown, closeDropDown, ref]
  )

  useOutsideClick(ref, () => closeDropDown())

  return value
}

export default useDropdown
