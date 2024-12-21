import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import BookDetails from '../app/books/page'
import Cart from '../app/cart/page'
import Login from '../app/login/page'
import Signup from '../app/signup/page'
import Profile from '../app/profile/page'
import { AuthProvider } from '@/contexts/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App