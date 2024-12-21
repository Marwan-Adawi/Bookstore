import { Link } from 'react-router-dom'
import { Book as BookType } from '@/types/Book'

interface BookProps {
  book: BookType
}

export default function Book({ book }: BookProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{book.title}</h3>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-indigo-600 font-bold">${book.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}

