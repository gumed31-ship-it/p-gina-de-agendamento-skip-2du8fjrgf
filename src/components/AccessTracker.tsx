import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import pb from '@/lib/pocketbase/client'

export function AccessTracker() {
  const location = useLocation()

  useEffect(() => {
    pb.collection('access_logs')
      .create({
        path: location.pathname,
      })
      .catch(() => {
        // Fail silently for end-user
      })
  }, [location.pathname])

  return null
}
