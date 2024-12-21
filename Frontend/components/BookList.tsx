import Book from './Book'

interface BookType {
  id: number
  title: string
  author: string
  price: number
  image: string
}

interface BookListProps {
  books?: BookType[]
}

export default function BookList({ books = [] }: BookListProps) {
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

