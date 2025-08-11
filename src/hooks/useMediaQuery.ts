import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQueryList = window.matchMedia(query)

      const listener = (event: any) => {
        setMatches(event.matches)
      }

      setMatches(mediaQueryList.matches)

      mediaQueryList.addEventListener('change', listener)

      return () => {
        mediaQueryList.removeEventListener('change', listener)
      };
    }
  }, [query])

  return matches
}
