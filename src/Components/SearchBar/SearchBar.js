import React, { useState } from 'react'

const SearchBar = ({ providerList, setFilteredProviderList }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const searchResults = filterProvider()
    setFilteredProviderList(searchResults)
    setSearchInput('')
  }

  const filterProvider = () => {
    const filteredProviders = providerList.filter(provider => {
      return provider.insurances.find(insurance => {
        return insurance.company.toUpperCase().includes(searchInput.toUpperCase())
      })
    })
    return filteredProviders
  }

  return(
    <form>
      <input
        type='text'
        placeholder='Search by Insurance'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button onClick={(event) => handleSearch(event)}>Search</button>
    </form>
  )
}

export default SearchBar
