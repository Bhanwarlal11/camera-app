import { useEffect, useState } from 'react'

const useCurrentPath = () => {
  const [path, setPath] = useState('')

  useEffect(() => {
    const handleRouteChange = () => {
      setPath(window.location.pathname)
    }

    if (typeof window !== 'undefined') {
      handleRouteChange() // Set initial path
      window.addEventListener('popstate', handleRouteChange)
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return path
}

export default useCurrentPath
