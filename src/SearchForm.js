import React from 'react'
import { useGlobalContext } from './context'
import '../src/index.css'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h1> TECH NEWS SEARCH</h1>
     
      <div className='hello'>
      <input
        type='text'
        placeholder="Search your news..."
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        
      />
      </div>
    </form>
  )
}

export default SearchForm
