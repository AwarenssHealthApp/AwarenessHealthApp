import React, { useState } from 'react'

const SearchBar = ({ doctorList, setFilteredDoctorList, mentalHealthProsList, setFilteredMentalHealthProsList }) => {
  const [searchInput, setSearchInput] = useState('')
  const providerType = doctorList ? doctorList : mentalHealthProsList
  const setFilteredList = setFilteredDoctorList ? setFilteredDoctorList : setMentalHealthProsList

  const handleSearch = (event) => {
    event.preventDefault()
    const searchResults = filterProvider()
    setFilteredList(searchResults)
    setSearchInput('')
  }

  const filterProvider = () => {
    const filteredProviders = providerType.filter(doctor => {
      return doctor.insurances.find(insurance => {
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
