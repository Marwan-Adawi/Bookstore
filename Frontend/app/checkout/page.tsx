'use client'

import { useState } from 'react'

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would typically send the order to a backend API
    console.log('Order submitted:', formData)
    alert('Thank you for your order!')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="city" className="block mb-1">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="flex-1">
            <label htmlFor="country" className="block mb-1">Country</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="flex-1">
            <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        </div>
        <div>
          <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="expiryDate" className="block mb-1">Expiry Date</label>
            <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="MM/YY" />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block mb-1">CVV</label>
            <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
          Place Order
        </button>
      </form>
    </div>
  )
}

