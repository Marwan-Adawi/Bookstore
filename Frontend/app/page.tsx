import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import BookList from '@/components/BookList'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">Welcome to Modern Reads</h1>
        <p className="text-xl mb-8">Discover your next favorite book in our contemporary online bookstore.</p>
        <SearchBar />
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6">New Releases</h2>
        <BookList category="new" />
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6">Trending Now</h2>
        <BookList category="trending" />
      </section>
      
      <section className="text-center">
        <Link href="/books" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
          Explore All Books
        </Link>
      </section>
    </div>
  )
}

