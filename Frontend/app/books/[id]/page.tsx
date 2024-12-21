import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'

export default function BookDetails({ params }: { params: { id: string } }) {
  // This would typically fetch data from an API based on the id
  const book = {
    id: parseInt(params.id),
    title: 'The Calm Mind',
    author: 'Jane Doe',
    price: 15.99,
    image: '/placeholder.svg',
    description: 'A soothing journey through the landscape of the mind, offering techniques for relaxation and inner peace.',
    tags: ['Self-Help', 'Mindfulness', 'Psychology']
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <Image src={book.image} alt={book.title} width={300} height={450} className="w-full h-auto" />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
        <p className="text-2xl text-teal-600 font-bold mb-4">${book.price.toFixed(2)}</p>
        <p className="mb-4">{book.description}</p>
        <div className="mb-4">
          {book.tags.map(tag => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <AddToCartButton bookId={book.id} />
      </div>
    </div>
  )
}

