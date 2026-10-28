import { useEffect, useState } from 'react'

export interface Photo {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const PHOTOS_URL = 'https://picsum.photos/v2/list?limit=30'

function useFetchPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const controller = new AbortController()
    async function loadPhotos() {
      try {
        const response = await fetch(PHOTOS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
        setPhotos((await response.json()) as Photo[])
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Could not load photos. Please try again later.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    loadPhotos()
    return () => controller.abort()
  }, [])
  return { photos, loading, error }
}

export default useFetchPhotos
