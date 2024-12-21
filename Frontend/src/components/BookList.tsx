import Book from './Book'
import { Book as BookType } from '@/types/Book'

interface BookListProps {
  books?: BookType[]
  category?: string
}

export default function BookList({ books = [], category }: BookListProps) {
  if (!books || books.length === 0) {
    return <p className="text-gray-600">No books found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}

