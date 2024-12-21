import SearchBar from '@/components/SearchBar'
import BookList from '@/components/BookList'

export default function Books() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Our Books</h1>
      <SearchBar />
      <div className="mt-8">
        <BookList category="all" />
      </div>
    </div>
  )
}

