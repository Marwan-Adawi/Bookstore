'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from 'C:/Users/3adaw/Desktop/Fall24/Software/Bookstore-Project/frontend/components/AuthContext.tsx'
import BookList from '@/components/BookList'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('favorites')
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setActiveTab('favorites')}
          className={`pb-2 ${activeTab === 'favorites' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab('recentlyRead')}
          className={`pb-2 ${activeTab === 'recentlyRead' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
        >
          Recently Read
        </button>
        <button
          onClick={() => setActiveTab('wantToRead')}
          className={`pb-2 ${activeTab === 'wantToRead' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
        >
          Want to Read
        </button>
      </div>
      {activeTab === 'favorites' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Favorites</h2>
          <BookList category="all" />
        </div>
      )}
      {activeTab === 'recentlyRead' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recently Read</h2>
          <BookList category="all" />
        </div>
      )}
      {activeTab === 'wantToRead' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Want to Read</h2>
          <BookList category="all" />
        </div>
      )}
    </div>
  )
}

