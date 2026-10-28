import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/use-fetch-photos'
import favouritesReducer, { readFavourites, STORAGE_KEY } from '../reducers/favourites-reducer'
import PhotoCard from './photo-card'
import SearchBar from './search-bar'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [favourites, dispatch] = useReducer(favouritesReducer, [], readFavourites)
  const [query, setQuery] = useState('')
  const handleSearch = useCallback((value: string) => setQuery(value), [])
  const handleToggle = useCallback((id: string) => dispatch({ type: 'TOGGLE', id }), [])
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return photos.filter((photo) => photo.author.toLowerCase().includes(term))
  }, [photos, query])
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  }, [favourites])
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div
          role="status"
          aria-label="Loading photos"
          className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-700"
        />
      </div>
    )
  }
  if (error) {
    return <p className="py-10 text-center text-red-600">{error}</p>
  }
  return (
    <section className="flex flex-col gap-6">
      <SearchBar value={query} onChange={handleSearch} />
      {filtered.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No photos match "{query}".</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
