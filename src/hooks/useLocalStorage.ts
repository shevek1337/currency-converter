import { Dispatch, SetStateAction, useState } from "react"

const useLocalStorage = <T>(
  key: string,
  initialValue?: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] => {
  const storageValue = () => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(error)
      return initialValue
    }
  }

  const [savedValue, setSavedValue] = useState<T>(storageValue)

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    const updatedValue = value instanceof Function ? value(savedValue) : value
    setSavedValue(updatedValue)
    window.localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return [savedValue, setValue]
}

export default useLocalStorage
