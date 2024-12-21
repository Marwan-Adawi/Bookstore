export default function Trending() {
  // This would typically fetch data from an API
  const trendingBooks = [
    { id: 1, title: 'Trending Book 1' },
    { id: 2, title: 'Trending Book 2' },
    { id: 3, title: 'Trending Book 3' },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">Trending</h2>
      <ul>
        {trendingBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </section>
  )
}

