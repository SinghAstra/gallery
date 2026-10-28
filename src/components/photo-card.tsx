import type { Photo } from '../hooks/use-fetch-photos'

interface PhotoCardProps {
  photo: Photo
  isFavourite: boolean
  onToggle: (id: string) => void
}

function PhotoCard({ photo, isFavourite, onToggle }: PhotoCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="aspect-4/3 w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2 p-3">
        <p className="truncate text-sm font-medium text-gray-700">{photo.author}</p>
        <button
          type="button"
          onClick={() => onToggle(photo.id)}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? `Remove ${photo.author} from favourites` : `Add ${photo.author} to favourites`}
          className={`text-xl leading-none transition-colors ${isFavourite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>
    </article>
  )
}

export default PhotoCard
