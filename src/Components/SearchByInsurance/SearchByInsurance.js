import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchByInsurance = ({ providerList, setFilteredProviderList }) => {
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const searchResults = filterProvider()
    if (searchResults.length) {
      setFilteredProviderList(searchResults)
    } else {
      setError(`Sorry! We don't have any results for ${searchInput}`)
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
      <input className='insSearch-input'
        type='text'
        placeholder='Search by Insurance'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button className='search-ins-button' id='search-button' onClick={(event) => handleSearch(event)}>Search</button>
      {error &&
        <p id='search-error-message'>{error}</p>}
    </form>
  )
}

SearchByInsurance.propTypes = {
  providerList: PropTypes.array,
  setFilteredProviderList: PropTypes.func
}

export default SearchByInsurance
