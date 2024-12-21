'use client'

import Link from 'next/link'
import { ShoppingCart, User, LogIn, LogOut } from 'lucide-react'
import { useAuth } from './AuthContext'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Modern Reads</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/books" className="hover:text-indigo-200 transition-colors">Books</Link></li>
            <li>
              <Link href="/cart" className="hover:text-indigo-200 transition-colors">
                <ShoppingCart className="inline-block w-6 h-6" />
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/profile" className="hover:text-indigo-200 transition-colors">
                    <User className="inline-block w-6 h-6" />
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:text-indigo-200 transition-colors">
                    <LogOut className="inline-block w-6 h-6" />
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="hover:text-indigo-200 transition-colors">
                  <LogIn className="inline-block w-6 h-6" />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

