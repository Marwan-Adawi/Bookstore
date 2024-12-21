import { Dispatch, SetStateAction } from 'react'

interface FiltersType {
  category: string
  minPrice: string
  maxPrice: string
  fromDate: string
  toDate: string
}

interface SearchFiltersProps {
  filters: FiltersType
  setFilters: Dispatch<SetStateAction<FiltersType>>
}

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const categories = ['Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Thriller', 'Fantasy']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={filters.toDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  )
}

