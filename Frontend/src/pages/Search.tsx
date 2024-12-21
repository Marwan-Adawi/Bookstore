import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BookList from '@/components/BookList'
import SearchFilters from '@/components/SearchFilters'
import { Book } from '@/types/Book'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])

  // This would typically fetch data from an API
  const allBooks: Book[] = [
    { id: 1, title: 'The Silent Echo', author: 'Emma Rivers', price: 15.99, category: 'Mystery', publicationDate: '2022-05-15', image: '/placeholder.svg' },
    { id: 2, title: 'Quantum Dreams', author: 'Alex Novak', price: 12.99, category: 'Science Fiction', publicationDate: '2023-01-22', image: '/placeholder.svg' },
    { id: 3, title: 'The Last Algorithm', author: 'Sarah Chen', price: 14.99, category: 'Thriller', publicationDate: '2021-11-30', image: '/placeholder.svg' },
    { id: 4, title: 'Echoes of Eternity', author: 'Michael Dawn', price: 13.99, category: 'Fantasy', publicationDate: '2023-03-10', image: '/placeholder.svg' },
    { id: 5, title: 'Coding in Color', author: 'Lisa Park', price: 19.99, category: 'Non-fiction', publicationDate: '2022-09-05', image: '/placeholder.svg' },
    { id: 6, title: 'The Midnight Library', author: 'Matt Haig', price: 11.99, category: 'Fiction', publicationDate: '2020-08-13', image: '/placeholder.svg' },
  ]

  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    fromDate: '',
    toDate: '',
  })

  useEffect(() => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = allBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(lowercaseQuery) || 
                            book.author.toLowerCase().includes(lowercaseQuery)
      const matchesCategory = !filters.category || book.category === filters.category
      const matchesPrice = (!filters.minPrice || book.price >= parseFloat(filters.minPrice)) &&
                           (!filters.maxPrice || book.price <= parseFloat(filters.maxPrice))
      const matchesDate = (!filters.fromDate || book.publicationDate >= filters.fromDate) &&
                          (!filters.toDate || book.publicationDate <= filters.toDate)
      
      return matchesSearch && matchesCategory && matchesPrice && matchesDate
    })
    setFilteredBooks(filtered)
  }, [query, filters])

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-1/4">
        <SearchFilters filters={filters} setFilters={setFilters} />
      </aside>
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
        <BookList books={filteredBooks} />
      </div>
    </div>
  )
}

