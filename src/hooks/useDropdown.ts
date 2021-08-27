import { useCallback, useMemo, useState } from "react"

type IDropdown = {
  readonly isSelected: boolean
  readonly toggleDropdown: () => void
}

const useDropdown = (): IDropdown => {
  const [isSelected, setIsSelected] = useState(false)
  const toggleDropdown = useCallback(() => {
    setIsSelected(!isSelected)
  }, [isSelected])

  const value = useMemo(
    () => ({ isSelected, toggleDropdown }),
    [isSelected, toggleDropdown]
  )

  return value
}

export default useDropdown
