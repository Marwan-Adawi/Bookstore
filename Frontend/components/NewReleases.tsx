export default function NewReleases() {
  // This would typically fetch data from an API
  const newReleases = [
    { id: 1, title: 'New Book 1' },
    { id: 2, title: 'New Book 2' },
    { id: 3, title: 'New Book 3' },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">New Releases</h2>
      <ul>
        {newReleases.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </section>
  )
}

