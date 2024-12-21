'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'The Calm Mind', author: 'Jane Doe', price: 15.99, quantity: 1, image: '/placeholder.svg' },
    { id: 2, title: 'Serene Thoughts', author: 'John Smith', price: 12.99, quantity: 2, image: '/placeholder.svg' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image src={item.image} alt={item.title} width={80} height={120} className="mr-4" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.author}</p>
                <p className="text-teal-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout" className="inline-block mt-4 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

