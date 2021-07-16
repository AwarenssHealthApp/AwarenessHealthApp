import React, { useState } from 'react'

const SearchByInsurance = ({ providerList, setFilteredProviderList }) => {
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const searchResults = filterProvider()
    if (searchResults.length) {
      setFilteredProviderList(searchResults)
    } else {
      setError(`Sorry! We don\'t have any results for ${searchInput}`)
    }
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
      {error &&
        <p>{error}</p>}
    </form>
  )
}

export default SearchByInsurance
