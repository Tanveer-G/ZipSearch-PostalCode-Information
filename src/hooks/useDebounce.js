import { useState, useEffect } from 'react'

export default function useDebounce(query, delay = 400) {
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    let resetClockId = setTimeout(() => {
      setDebouncedQuery(query)
    }, delay)

    return () => clearTimeout(resetClockId)

  }, [query, delay])

  return debouncedQuery
}