interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search by author"
      aria-label="Search photos by author"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none focus:border-gray-500"
    />
  )
}

export default SearchBar
