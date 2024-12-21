import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="flex-grow p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 transition-colors">
        Search
      </button>
    </form>
  )
}

