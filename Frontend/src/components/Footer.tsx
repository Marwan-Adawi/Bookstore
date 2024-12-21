import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Modern Reads</h3>
            <p>Your go-to online bookstore for contemporary literature and timeless classics.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/books" className="hover:text-indigo-600">All Books</Link></li>
              <li><Link to="/new-releases" className="hover:text-indigo-600">New Releases</Link></li>
              <li><Link to="/bestsellers" className="hover:text-indigo-600">Bestsellers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-600">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-indigo-600">Shipping Information</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Facebook</a></li>
              <li><a href="#" className="hover:text-indigo-600">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 Modern Reads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

