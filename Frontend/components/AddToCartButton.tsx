'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ bookId }: { bookId: number }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // This would typically send a request to add the item to the cart
    console.log(`Adding book ${bookId} to cart`)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`px-4 py-2 rounded-full flex items-center ${
        isAdded ? 'bg-green-500' : 'bg-teal-600 hover:bg-teal-700'
      } text-white transition-colors`}
    >
      <ShoppingCart className="mr-2" />
      {isAdded ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}

