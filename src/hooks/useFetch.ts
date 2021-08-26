import { useEffect, useState } from "react"

interface ReturnValues {
  readonly data: null | JSON
  readonly loading: boolean
  readonly error: null | string
}

const useFetch = (url: string): ReturnValues => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
