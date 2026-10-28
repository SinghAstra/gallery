const STORAGE_KEY = 'favourites'

type FavouritesAction = { type: 'TOGGLE'; id: string }

function readFavourites(): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(stored) ? stored.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

function favouritesReducer(favourites: string[], action: FavouritesAction): string[] {
  switch (action.type) {
    case 'TOGGLE':
      return favourites.includes(action.id)
        ? favourites.filter((id) => id !== action.id)
        : [...favourites, action.id]
    default:
      return favourites
  }
}

export { STORAGE_KEY, readFavourites }
export type { FavouritesAction }
export default favouritesReducer
